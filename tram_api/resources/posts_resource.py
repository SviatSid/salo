from flask import request

from tram_api.resources import BaseResource


class PostsResource(BaseResource):

    def post(self):
        post = self.mongo.db.posts
        new_post = {
            'name': request.form.get('name', 1),
            'content': request.form.get('content', ''),
        }
        post_id = post.insert(new_post)
        new_post = post.find_one({'_id': post_id})
        new_post['_id'] = str(new_post['_id'])
        return {'status': 'ok', 'rule': new_post}, 200

    def get(self):
        posts = self.mongo.db.posts
        result = []
        for post in posts.find():
            result.append({
                'name': post['name'],
                'content': post['content'],
                '_id': str(post['_id'])
            })
        return result, 200


class PostResource(BaseResource):
    pass

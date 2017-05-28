import time
from datetime import datetime
from dateutil.rrule import rrule, MONTHLY, WEEKLY, HOURLY

import facebook

from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient('localhost', 27017)
frequency = {
    '1': MONTHLY,
    '2': WEEKLY,
    '3': HOURLY
}

access_tocken = 'EAAEcycleLzMBAG9VLxYRCV5exu6VseCZAJwBtD5BH1IhXkbjacdSyKRzGyRa1hdqd0sZBipmvZBfZCyVrtLRtP2zecHZAxaZCvuAvOjuDRZBxDz2mZBD4AIY8gAVtoa5nVUUqfxVZARy98lwWRs8coeyniC33Ml10EYxEcT0hSHgDzgZDZD'
page_id = '100003465410555'


def get_api(cfg):
    graph = facebook.GraphAPI(cfg['access_token'])
    return graph


def main():
    db = client.vk_publisher
    rules = db.rules
    posts = db.posts
    while True:
        for rule in rules.find():
            date = rule['date'] + ' ' + rule['time']
            start_date = datetime.strptime(date, '%m/%d/%Y %H:%M')
            dates = list(rrule(freq=frequency[rule['frequency']], count=1, dtstart=start_date))
            now = datetime.now()
            if now > dates[0] and not rule.get('created', False):
                api = get_api({
                    'page_id': page_id,
                    'access_token': access_tocken,
                })
                post = posts.find_one({'_id': ObjectId(rule['post_id'])})
                api.put_wall_post(post['content'])
                rule.update({'created': True})
                rules.update({'_id': rule['_id']}, rule)
                print('Post created')
        print('hearbeet')
        time.sleep(60)


if __name__ == "__main__":
    main()

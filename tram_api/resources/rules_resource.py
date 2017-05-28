from flask import request

from tram_api.resources import BaseResource


class RulesResource(BaseResource):

    def post(self):
        rule = self.mongo.db.rules
        new_rule = {
            'frequency': request.form.get('frequency', 1),
            'days': request.form.getlist('days[]'),
            'date': request.form.get('date_picker', ''),
            'time': request.form.get('time_picker', ''),
            'post_id': request.form.get('post_id', 0),
        }
        rule_id = rule.insert(new_rule)
        new_rule = rule.find_one({'_id': rule_id})
        new_rule['_id'] = str(new_rule['_id'])
        return {'status': 'ok', 'rule': new_rule}, 200

    def get(self):
        rules = self.mongo.db.rules
        result = []
        for rule in rules.find():
            result.append({
                'frequency': rule['frequency'],
                'days': rule['days'],
                'date': rule['date'],
                'time': rule['time'],
                'post_id': rule.get('post_id', 0),
                '_id': str(rule['_id'])
            })
        return result, 200


class RuleResource(BaseResource):
    pass

import vk


session = vk.AuthSession(app_id='6018043',
                         user_login='+380996685429',
                         user_password='creativeringener',
                         scope='wall')
api = vk.API(session, v='5.64', lang='ru')
api.wall.post(message="Hello, world", owner_id=427256657)

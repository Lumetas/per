from random import randint
import vk_api
from vk_api.longpoll import VkLongPoll, VkEventType

def lower(str):
    return str.lower()

def write_msg(user_id, message):
    vk.method('messages.send', {'user_id': user_id, 'message': message, 'random_id': randint(0, 1000)})

# API-ключ созданный ранее
token = ""

# Авторизуемся как сообщество
vk = vk_api.VkApi(token=token)

# Работа с сообщениями
longpoll = VkLongPoll(vk)

# Основной цикл
for event in longpoll.listen():

    # Если пришло новое сообщение
    if event.type == VkEventType.MESSAGE_NEW:
    
        # Если оно имеет метку для меня( то есть бота)
        if event.to_me:
        
            # Сообщение от пользователя
            request = event.text
            print(event.user_id)
            print(request)
            print()
           # exit()
            # Каменная логика ответа
            if lower(request) == "привет" or lower(request) == "начать":
                write_msg(event.user_id, "Хай")
            elif lower(request) == "пока":
                write_msg(event.user_id, "Пока((")
            else:
                write_msg(event.user_id, "Не поняла вашего ответа...")

                

from random import randint
import vk_api
from vk_api.longpoll import VkLongPoll, VkEventType

def lower(str):
    return str.lower()

def write_msg(user_id, message):
    vk.method('messages.send', {'user_id': user_id, 'message': message, 'random_id': randint(0, 1000)})

# API-ключ созданный ранее
token = "vk1.a.szTPfS0Uq5smZne45nu0VdZxqLMTbEABzahwvF0ACkHc5UBXEgF1goGJzYgP2mIME0dsspAYSieasMfPmdCtVbvEx0SNKdC9D37Ant4hAaAZxmxJTA6bcuro3UkSE5b4tWmHikIozJ3KCHnqC6kdjZ7rfr9zMCNu3x1bzg7jwVIle-clCWp1sVjk0v0UCy53squbWVOFh0AKFapWyFtjmQ"

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

                

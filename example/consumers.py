from channels import Group
import json
from channels.generic.websocket import WebsocketConsumer

class ChatConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

    def disconnect(self,close_code):
        pass

    def recieve(self,text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        self.send(text_data = json.dumps({
            'message':message
        }))

def ws_connect(message):
    Group('users').add(message.reply_channel)

def ws_disconect(message):
    Group('users').discard(message.reply_channel)
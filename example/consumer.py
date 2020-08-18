from channels import Group

def ws_connect(message):
    Group('users').add(message.reply_channel)

def ws_disconect(message):
    Group('users').discard(message.reply_channel)
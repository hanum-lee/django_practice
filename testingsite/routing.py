from channels.routing import ProtocolTypeRouter
#from example.consumer import ws_connect, ws_disconect


application = ProtocolTypeRouter({
   # route('websocket.connect',ws_connect),
   # route('websocket.disconnect',ws_disconect)
})
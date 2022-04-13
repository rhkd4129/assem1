from .common import *


##디버그툴바  기본설정 
INSTALLED_APPS += [
    "debug_toolbar",
]
##디버그툴바  기본설정 
MIDDLEWARE = ["debug_toolbar.middleware.DebugToolbarMiddleware",] + MIDDLEWARE

# INTERNAL_IPS = ["127.0.0.1"] 이거 주석해제 하니까 admin도 안들가짐...

CORS_ORIGIN_WHITELIST = ["http://localhost:3000"] 
# ##이건 뭔지까먹음... core-headers랑 관련있던거 같기도,,? (리액트 개발주소가 3000이여서)

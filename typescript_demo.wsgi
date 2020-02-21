#!/usr/bin/python3
import sys
sys.path.insert(0,"/var/www/typescript_demo/")
sys.path.insert(0,"/var/www/typescript_demo/typescript_demo/")

import logging
logging.basicConfig(stream=sys.stderr)

from typescript_demo import app as application


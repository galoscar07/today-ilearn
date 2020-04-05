# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import admin
from .models import TvShow, Series, Episode, EpisodeUser

admin.site.register(TvShow)
admin.site.register(Series)
admin.site.register(Episode)
admin.site.register(EpisodeUser)
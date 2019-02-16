# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


class TvShow(models.Model):
    nameTvShow = models.CharField('Show name', max_length=50)
    apparitionDate = models.DateField('Aired Date')
    endDate = models.DateField('Ended Date')
    episodeDuration = models.IntegerField('Duration Episode (minutes)', default=0)
    shortDescription = models.CharField('Short Description', max_length=200)
    genreTvShow = models.CharField('Genre', max_length=100)

    def __str__(self):
        return self.nameTvShow


class Series(models.Model):
    tvShow = models.ForeignKey(TvShow, on_delete=models.CASCADE)
    nameSeries = models.CharField('Series Name', max_length=100)
    numberSeries = models.IntegerField('Series Number', default=0)

    def __str__(self):
        return self.nameSeries


class Episode(models.Model):
    series = models.ForeignKey(Series, on_delete=models.CASCADE)
    episodeNumber = models.IntegerField('Episode Number', default=0)
    episodeName = models.CharField('Episode Name', max_length=100)
    episodeDescription = models.CharField('Episode Description', max_length=200)
    viewedEpisode = models.BooleanField('Watched', default=False)
    users = models.ManyToManyField('auth.User', through='EpisodeUser', related_name='episode')

    def __str__(self):
        return self.episodeName


class EpisodeUser(models.Model):
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    episode = models.ForeignKey(Episode, on_delete=models.CASCADE)
    date_added = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.episode.episodeName + self.user.username
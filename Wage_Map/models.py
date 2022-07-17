from django.db import models

# Create your models here.


class income_by_state(models.Model):
    state = models.CharField(max_length=500, primary_key=True)
    income = models.IntegerField()

    def __str__(self):
        return self.state

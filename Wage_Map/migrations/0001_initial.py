# Generated by Django 4.0.5 on 2022-07-17 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='income_by_state',
            fields=[
                ('state', models.CharField(max_length=500, primary_key=True, serialize=False)),
                ('income', models.IntegerField()),
            ],
        ),
    ]

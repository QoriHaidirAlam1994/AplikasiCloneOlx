# Generated by Django 2.0.6 on 2018-06-05 13:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='news',
            old_name='content',
            new_name='img',
        ),
        migrations.RemoveField(
            model_name='news',
            name='created_at',
        ),
        migrations.AddField(
            model_name='news',
            name='text',
            field=models.TextField(default=0),
            preserve_default=False,
        ),
    ]

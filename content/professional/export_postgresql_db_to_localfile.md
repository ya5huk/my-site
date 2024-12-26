---
title: 'How to export a PostgreSQL database to a local file'
image: 'https://media.licdn.com/dms/image/v2/D4D12AQEkGoqmiPCYOw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1692642117989?e=2147483647&v=beta&t=TIPZy2EZpTj5Hs_i9VUroN5xbwnf7-47PrVKdULXeBA'
lang: 'en_US'
date: '08/21/2023'
---

It takes two steps to export a PostgreSQL database, first export a sql-script and then restore the data from it. The following tutorial works both on a local database and an external one, as long as they allow outside requests.

To export an sql-script of your database we'll use pg_dump. If you downloaded Postgresql from the official site then it'll be located inside the downloaded folder: /bin/pg_dump.exe. Same goes for the next command

I recommend you open the shell/cmd/Terminal from outside the folder because it may have writing-restrictions and paste the following command line:

```
./path_to_bin/pg_dump.exe -h db_host -U your_username -Fc db_name > dump_file.pgsql        
```

If you encountered Access is denied, then it is probably because the file you are trying to write to got writing restrictions.

Next, we'll use [pg_restore](https://www.postgresql.org/docs/current/app-pgrestore.html) to actually export the data and not just a script. It is simpler, that's the command line:

```
./path_to_bin/pg_restore.exe -f destination_file.sql dump_file.pgsql        
```

This will create a sequence of SQL queries that'll create the database you just cloned. This file will contain all of the cloned database's data.

Thanks for reading, take care!


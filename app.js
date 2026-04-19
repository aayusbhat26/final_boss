/* app.js — Data Engineering Knowledge Base Interactive Tracker */

// ============================
// DATA — 31 Modules across 8 Phases
// ============================
const PHASES = [
  {
    id: 'phase1',
    icon: '🗂️',
    label: 'Phase 1',
    name: 'Software & Data Foundations',
    color: '#f59e0b',
    modules: [
      {
        id: 'mod1', num: 1,
        title: 'Git & GitHub',
        sections: [
          { title: '1.1 Git Fundamentals', topics: [
            'What is Version Control? Centralized vs Distributed VCS',
            'Git architecture: working directory, staging area (index), local repository, remote repository',
            'Installing Git and initial configuration (`git config --global user.name`, `user.email`)',
            '`.gitignore` — patterns, global gitignore, negation rules',
            'Git object model: blobs, trees, commits, tags',
            'SHA-1 hashing and how Git tracks content',
          ]},
          { title: '1.2 Core Git Commands', topics: [
            '`git init` — initializing a new repository',
            '`git clone <url>` — cloning a remote repository (shallow clone with `--depth`)',
            '`git status` — checking working tree state',
            '`git add` — staging files (`git add .`, `git add -p` for interactive staging)',
            '`git commit` — committing changes (`-m`, `--amend`)',
            '`git log` — viewing history (`--oneline`, `--graph`, `--all`, `--author`, `--since`)',
            '`git diff` — comparing changes (unstaged, staged, between commits)',
            '`git show` — inspecting a specific commit',
            '`git rm` and `git mv` — removing and moving files',
          ]},
          { title: '1.3 Branching & Merging', topics: [
            'What is a branch? HEAD pointer concept',
            '`git branch` — creating, listing, deleting branches',
            '`git checkout` / `git switch` — switching branches',
            '`git merge` — fast-forward merge vs 3-way merge',
            'Merge conflicts — how they arise, manual resolution, using a merge tool',
            '`git rebase` — rebasing onto another branch, interactive rebase (`-i`)',
            'Rebase vs Merge — when to use which',
            '`git cherry-pick` — applying specific commits',
            '`git stash` — stashing work (`stash pop`, `stash list`, `stash apply`)',
          ]},
          { title: '1.4 Remote Repositories', topics: [
            '`git remote` — adding, removing, listing remotes (`git remote -v`)',
            '`git fetch` — downloading remote changes without merging',
            '`git pull` — fetch + merge (vs `--rebase`)',
            '`git push` — pushing branches and tags (`--force`, `--force-with-lease`)',
            'Tracking branches — upstream configuration',
            'Working with forks — adding upstream remote, syncing fork',
          ]},
          { title: '1.5 Undoing Changes', topics: [
            '`git restore` — discarding working directory changes',
            '`git reset` — `--soft`, `--mixed`, `--hard` modes',
            '`git revert` — creating a new commit that undoes a previous commit (safe for shared history)',
            '`git reflog` — recovering lost commits',
            'Detached HEAD state — what it is and how to recover',
          ]},
          { title: '1.6 Tagging', topics: [
            'Lightweight tags vs annotated tags',
            '`git tag` — creating, listing, deleting tags',
            'Pushing tags to remote (`git push origin --tags`)',
            'Semantic Versioning (SemVer) — MAJOR.MINOR.PATCH',
          ]},
          { title: '1.7 GitHub Features', topics: [
            'Repositories — public vs private, README, topics',
            'Issues — templates, labels, milestones, assignees',
            'Pull Requests (PRs) — creating, reviewing, commenting, approving, merging',
            'PR merge strategies — Merge commit, Squash and merge, Rebase and merge',
            'Code Reviews — inline comments, suggestions, required reviewers',
            'GitHub Actions — CI/CD workflows, YAML syntax, triggers (push, PR, schedule)',
            'Branch protection rules — require reviews, status checks, no force push',
            'GitHub Secrets — storing API keys and tokens securely',
            'GitHub Packages — hosting container images and packages',
            'GitHub Discussions & Wiki',
            'Forking workflow — open source contribution model',
          ]},
          { title: '1.8 Branching Strategies', topics: [
            'Git Flow — `main`, `develop`, `feature/*`, `release/*`, `hotfix/*`',
            'GitHub Flow — simplified: feature branches off `main`, PRs, deploy',
            'Trunk-Based Development — short-lived branches, feature flags',
            'Conventional Commits — `feat:`, `fix:`, `chore:`, `docs:` commit message standard',
          ]},
        ]
      },
      {
        id: 'mod2', num: 2,
        title: 'Web Services, HTTP & Cloud Basics',
        sections: [
          { title: '2.1 HTTP Protocol', topics: [
            'HTTP vs HTTPS — TLS/SSL encryption, certificates',
            'HTTP methods — GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS',
            'HTTP status codes — 1xx, 2xx (200, 201, 204), 3xx (301, 302), 4xx (400, 401, 403, 404), 5xx (500, 502, 503)',
            'HTTP headers — Content-Type, Authorization, Accept, Cache-Control, CORS headers',
            'Request and response structure — headers, body, query params',
            'HTTP/1.1 vs HTTP/2 vs HTTP/3',
          ]},
          { title: '2.2 REST APIs', topics: [
            'REST principles — statelessness, client-server, uniform interface, layered system',
            'Resource-based URLs — nouns not verbs (`/users/{id}`)',
            'CRUD operations mapped to HTTP methods',
            'JSON as the standard data exchange format',
            'Query parameters vs path parameters vs request body',
            'Pagination — cursor-based, offset-based, page-based',
            'API versioning — URL versioning (`/v1/`), header versioning',
            'Rate limiting and throttling — headers (`X-RateLimit-*`)',
            'Authentication — API Keys, OAuth 2.0, JWT tokens, Bearer tokens',
          ]},
          { title: '2.3 API Consumption in Python', topics: [
            '`requests` library — `get()`, `post()`, `put()`, `delete()`',
            'Handling responses — `response.json()`, `response.status_code`, `response.text`',
            'Session objects for persistent connections',
            'Timeout and retry logic',
            '`httpx` library — async HTTP client',
          ]},
          { title: '2.4 Cloud Computing Concepts', topics: [
            'What is cloud computing? On-premises vs Cloud vs Hybrid',
            'Cloud service models — IaaS, PaaS, SaaS, FaaS (serverless)',
            'Cloud deployment models — Public, Private, Hybrid, Multi-cloud',
            'Key cloud providers — AWS, Azure, GCP',
            'Shared responsibility model — what the cloud provider manages vs what you manage',
            'Regions and Availability Zones',
            'Elasticity, scalability, high availability, fault tolerance',
          ]},
        ]
      },
      {
        id: 'mod3', num: 3,
        title: 'Core Python',
        sections: [
          { title: '3.1 Python Basics', topics: [
            'Variables, data types — `int`, `float`, `str`, `bool`, `NoneType`',
            'Type conversion — `int()`, `str()`, `float()`, `bool()`',
            'String operations — slicing, formatting (`f-strings`, `.format()`, `%`), methods',
            'Operators — arithmetic, comparison, logical, bitwise, assignment',
          ]},
          { title: '3.2 Data Structures', topics: [
            'Lists — indexing, slicing, `append`, `extend`, `insert`, `remove`, `pop`, `sort`, list comprehensions',
            'Tuples — immutability, packing/unpacking, named tuples',
            'Dictionaries — creation, access, `.get()`, `.keys()`, `.values()`, `.items()`, dict comprehensions',
            'Sets — `add`, `remove`, `union`, `intersection`, `difference`, `issubset`, set comprehensions',
            'Frozensets',
          ]},
          { title: '3.3 Control Flow', topics: [
            '`if`, `elif`, `else` — conditional logic',
            'Ternary expressions — `x if condition else y`',
            '`for` loops — iterating over sequences, `range()`, `enumerate()`, `zip()`',
            '`while` loops — condition-based iteration',
            '`break`, `continue`, `pass`',
            'Nested loops and comprehensions',
          ]},
          { title: '3.4 Functions', topics: [
            'Defining functions — `def`, `return`',
            'Default arguments, keyword arguments, positional arguments',
            '`*args` and `**kwargs` — variable-length arguments',
            'Lambda functions — anonymous functions',
            'Higher-order functions — `map()`, `filter()`, `reduce()`',
            'Closures — inner functions capturing outer scope',
            'Decorators — `@functools.wraps`, creating custom decorators',
            'Generators — `yield`, `next()`, generator expressions, `itertools`',
            'Scope — LEGB rule (Local, Enclosing, Global, Built-in)',
          ]},
          { title: '3.5 File Handling', topics: [
            'Opening files — `open()`, file modes (`r`, `w`, `a`, `rb`, `wb`)',
            '`with` statement — context managers, automatic file closing',
            'Reading files — `read()`, `readline()`, `readlines()`',
            'Writing files — `write()`, `writelines()`',
            'Working with paths — `os.path`, `pathlib.Path`',
            '`os` module — `listdir()`, `mkdir()`, `rename()`, `remove()`',
            '`shutil` module — copying, moving files/directories',
          ]},
          { title: '3.6 Error & Exception Handling', topics: [
            'Exception hierarchy — `BaseException` → `Exception` → specific exceptions',
            '`try`, `except`, `else`, `finally` blocks',
            'Catching specific exceptions — `ValueError`, `TypeError`, `KeyError`, `FileNotFoundError`, `IndexError`',
            'Raising exceptions — `raise`, `raise from`',
            'Custom exceptions — creating exception classes',
            '`logging` module — `DEBUG`, `INFO`, `WARNING`, `ERROR`, `CRITICAL`',
            'Log formatters, handlers (FileHandler, StreamHandler)',
          ]},
          { title: '3.7 Object-Oriented Programming (OOP)', topics: [
            'Classes and objects — `class`, `__init__`, `self`',
            'Instance attributes vs class attributes',
            'Instance methods, class methods (`@classmethod`), static methods (`@staticmethod`)',
            'Inheritance — single, multiple, `super()`',
            'Encapsulation — private (`__`), protected (`_`) attributes',
            'Polymorphism — duck typing, method overloading',
            'Dunder/magic methods — `__str__`, `__repr__`, `__len__`, `__eq__`, `__iter__`',
            'Properties — `@property`, `@setter`, `@deleter`',
            'Abstract classes — `abc.ABC`, `@abstractmethod`',
            'Dataclasses — `@dataclass` decorator',
          ]},
          { title: '3.8 Modules & Packages', topics: [
            'Importing — `import`, `from ... import`, `as` aliases',
            '`__name__ == "__main__"` guard',
            'Creating packages — `__init__.py`',
            '`pip` — installing, upgrading, uninstalling packages',
            'Virtual environments — `venv`, `virtualenv`, `conda`',
            '`requirements.txt` and `pyproject.toml`',
          ]},
          { title: '3.9 Unit Testing', topics: [
            '`unittest` — `TestCase`, `setUp`, `tearDown`, assertions',
            '`pytest` — test discovery, fixtures, parametrize, marks',
            'Mocking — `unittest.mock.patch`, `MagicMock`, `Mock`',
            'Test coverage — `pytest-cov`, coverage reports',
            'TDD (Test-Driven Development) — red-green-refactor cycle',
          ]},
        ]
      },
      {
        id: 'mod4', num: 4,
        title: 'Docker',
        sections: [
          { title: '4.1 Docker Fundamentals', topics: [
            'What is containerization? VMs vs Containers',
            'Docker architecture — Docker daemon, Docker client, Docker Hub',
            'Images vs Containers — the relationship',
            'Container lifecycle — create, start, stop, restart, remove',
          ]},
          { title: '4.2 Dockerfile', topics: [
            '`FROM` — base image selection',
            '`RUN` — executing commands during build',
            '`COPY` vs `ADD` — copying files into image',
            '`WORKDIR` — setting working directory',
            '`ENV` — environment variables',
            '`EXPOSE` — documenting ports',
            '`CMD` vs `ENTRYPOINT` — difference and interaction',
            'Multi-stage builds — reducing image size',
            '`.dockerignore` file',
          ]},
          { title: '4.3 Docker Commands', topics: [
            '`docker build` — building images (`-t` for tagging)',
            '`docker run` — running containers (`-d`, `-p`, `-v`, `--env`, `--name`)',
            '`docker ps` — listing running containers',
            '`docker images` — listing images',
            '`docker exec` — running commands in a running container',
            '`docker logs` — viewing container logs',
            '`docker stop`, `docker rm`, `docker rmi`',
            '`docker pull` / `docker push` — registry operations',
            '`docker inspect` — detailed container/image info',
          ]},
          { title: '4.4 Docker Compose', topics: [
            '`docker-compose.yml` structure — `version`, `services`, `volumes`, `networks`',
            '`depends_on` — service dependencies',
            '`docker-compose up`, `down`, `build`, `ps`, `logs`',
            'Environment variable files (`.env`)',
          ]},
          { title: '4.5 Volumes & Networking', topics: [
            'Bind mounts vs named volumes',
            'Docker networking — bridge, host, none, overlay networks',
            'Container-to-container communication by service name',
          ]},
        ]
      },
      {
        id: 'mod5', num: 5,
        title: 'Linux & Bash Scripting',
        sections: [
          { title: '5.1 Linux Basics', topics: [
            'Filesystem hierarchy — `/`, `/home`, `/etc`, `/var`, `/tmp`, `/usr`, `/bin`',
            'File permissions — `rwx`, numeric notation (`chmod 755`)',
            'Ownership — `chown`, `chgrp`',
            'Users and groups — `useradd`, `passwd`, `sudo`',
            'Environment variables — `$PATH`, `$HOME`, `export`',
          ]},
          { title: '5.2 Essential Commands', topics: [
            'Navigation — `pwd`, `ls` (`-la`), `cd`, `tree`',
            'File ops — `cp`, `mv`, `rm` (`-rf`), `mkdir`, `touch`, `ln`',
            'Viewing — `cat`, `less`, `more`, `head`, `tail` (`-f` for live logs)',
            'Searching — `grep` (`-r`, `-i`, `-v`, `-n`), `find`, `locate`',
            'Text processing — `awk`, `sed`, `cut`, `sort`, `uniq`, `wc`',
            'Archiving — `tar` (`-czf`, `-xzf`), `zip`, `unzip`',
            'Process management — `ps`, `top`, `htop`, `kill`, `pkill`, `&`, `nohup`',
            'Piping and redirection — `|`, `>`, `>>`, `<`, `2>&1`',
          ]},
          { title: '5.3 Bash Scripting', topics: [
            'Shebang — `#!/bin/bash`',
            'Variables — `NAME="value"`, `$NAME`, `${NAME}`',
            'Conditionals — `if [ ]; then ... fi`, `[[ ]]` for string comparison',
            'Loops — `for`, `while`, `until`',
            'Functions in Bash',
            'Exit codes — `$?`, `exit 0`, `exit 1`',
            'Script arguments — `$1`, `$2`, `$@`, `$#`',
            'Cron jobs — crontab syntax (`* * * * *`)',
          ]},
        ]
      },
      {
        id: 'mod6', num: 6,
        title: 'Data Architecture Fundamentals',
        sections: [
          { title: '6.1 Types of Data', topics: [
            'Structured data — tables, relational databases',
            'Semi-structured data — JSON, XML, YAML, Avro',
            'Unstructured data — text, images, audio, video',
            'Streaming data vs batch data',
          ]},
          { title: '6.2 File Formats', topics: [
            'CSV — delimiter, quoting, encoding issues, no schema enforcement',
            'JSON — nested structures, arrays, key-value pairs',
            'XML — tags, attributes, XPath, XSD schemas',
            'Parquet — columnar storage, compression codecs (Snappy, GZIP), predicate pushdown, schema evolution',
            'Avro — row-based, schema embedded, great for Kafka',
            'ORC — optimized for Hive workloads',
            'Delta — Parquet + transaction log, ACID, time travel',
            'Excel (XLSX) — multi-sheet, formatting overhead',
            'YAML — configuration files, human-readable',
          ]},
          { title: '6.3 ETL vs ELT', topics: [
            'ETL — Extract, Transform, Load (traditional data warehouse approach)',
            'ELT — Extract, Load, Transform (cloud data warehouse / lakehouse approach)',
            'When to use ETL vs ELT',
            'Pipeline stages — extraction methods (full load, incremental, CDC)',
            'Transformation types — mapping, filtering, aggregation, enrichment, normalization',
            'Loading strategies — full reload, incremental append, upsert (merge)',
          ]},
          { title: '6.4 Data Modeling', topics: [
            'Conceptual, Logical, Physical data modeling levels',
            'Relational modeling — entities, attributes, relationships, cardinality',
            'Normalization — 1NF, 2NF, 3NF, BCNF',
            'Denormalization — for analytical workloads',
            'Star Schema — Fact tables, Dimension tables, advantages for BI',
            'Snowflake Schema — normalized dimensions',
            'Data Vault — Hub, Link, Satellite methodology',
            'Entity-Relationship Diagrams (ERD)',
            'SCD (Slowly Changing Dimensions) — Type 0, 1, 2, 3',
          ]},
          { title: '6.5 Data Quality', topics: [
            'Data quality dimensions — Completeness, Accuracy, Consistency, Timeliness, Validity, Uniqueness',
            'Null handling strategies — drop, impute, flag',
            'Deduplication strategies — exact match, fuzzy matching',
            'Great Expectations — expectations, suites, checkpoints, data docs',
            'Data profiling — column statistics, distribution, outlier detection',
            'Data contracts — schema agreements between teams',
          ]},
          { title: '6.6 Data Lineage', topics: [
            'What is data lineage? Column-level vs table-level lineage',
            'Lineage tracking tools — Apache Atlas, OpenLineage, Marquez',
            'Impact analysis — understanding downstream effects of schema changes',
            'Metadata management',
          ]},
        ]
      },
    ]
  },
  {
    id: 'phase2',
    icon: '🗂️',
    label: 'Phase 2',
    name: 'SQL & Data Processing',
    color: '#10b981',
    modules: [
      {
        id: 'mod7', num: 7,
        title: 'SQL',
        sections: [
          { title: '7.1 SQL Basics (DQL)', topics: [
            '`SELECT` statement structure — `SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`, `ORDER BY`, `LIMIT`',
            'Filtering with `WHERE` — comparison operators, `AND`, `OR`, `NOT`',
            '`BETWEEN`, `IN`, `LIKE` (`%`, `_`), `IS NULL`, `IS NOT NULL`',
            'Aliases — `AS` for columns and tables',
            '`DISTINCT` — removing duplicates',
            '`ORDER BY` — ascending, descending, multiple columns',
            '`LIMIT` / `TOP` / `FETCH FIRST`',
          ]},
          { title: '7.2 Joins', topics: [
            '`INNER JOIN` — only matching rows',
            '`LEFT JOIN` (LEFT OUTER JOIN) — all from left, matching from right',
            '`RIGHT JOIN` (RIGHT OUTER JOIN)',
            '`FULL OUTER JOIN` — all rows from both tables',
            '`CROSS JOIN` — Cartesian product',
            'Self Join — joining a table to itself',
            'Join conditions — `ON`, `USING`',
            'Multiple table joins — joining 3+ tables',
          ]},
          { title: '7.3 Set Operations', topics: [
            '`UNION` — combines results, removes duplicates',
            '`UNION ALL` — combines results, keeps duplicates (faster)',
            '`INTERSECT` — rows present in both queries',
            '`EXCEPT` / `MINUS` — rows in first but not second',
          ]},
          { title: '7.4 Aggregations & Grouping', topics: [
            'Aggregate functions — `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`',
            '`COUNT(*)` vs `COUNT(column)` — NULL handling difference',
            '`GROUP BY` — grouping rows',
            '`HAVING` — filtering groups (vs `WHERE` which filters rows)',
            '`ROLLUP` — subtotals and grand totals',
            '`CUBE` — all combinations of groupings',
            '`GROUPING SETS` — custom groupings',
          ]},
          { title: '7.5 Window Functions', topics: [
            '`OVER()` clause — defining the window',
            '`PARTITION BY` — dividing into groups',
            '`ORDER BY` within window — ordering for running calculations',
            'Ranking functions — `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `NTILE()`',
            'Offset functions — `LAG()`, `LEAD()`, `FIRST_VALUE()`, `LAST_VALUE()`',
            'Aggregate as window — `SUM() OVER`, `AVG() OVER`, `COUNT() OVER`',
            'Frame specification — `ROWS BETWEEN`, `RANGE BETWEEN`, `UNBOUNDED PRECEDING`',
            'Running totals, moving averages, percent of total',
          ]},
          { title: '7.6 Subqueries', topics: [
            'Scalar subqueries — returning a single value',
            'Row subqueries — returning a single row',
            'Table subqueries — used in `FROM` clause (derived tables)',
            'Correlated subqueries — referencing the outer query',
            '`EXISTS` and `NOT EXISTS`',
            '`IN` vs `EXISTS` — performance considerations',
            'CTEs (Common Table Expressions) — `WITH` clause, recursive CTEs',
          ]},
          { title: '7.7 DDL (Data Definition Language)', topics: [
            '`CREATE TABLE` — column definitions, constraints',
            'Data types — `INT`, `BIGINT`, `DECIMAL`, `VARCHAR`, `TEXT`, `DATE`, `TIMESTAMP`, `BOOLEAN`',
            'Constraints — `PRIMARY KEY`, `FOREIGN KEY`, `UNIQUE`, `NOT NULL`, `DEFAULT`, `CHECK`',
            '`ALTER TABLE` — `ADD COLUMN`, `DROP COLUMN`, `RENAME COLUMN`, `MODIFY`',
            '`DROP TABLE`, `TRUNCATE TABLE`',
            '`CREATE INDEX`, `DROP INDEX`',
            '`CREATE VIEW`, `DROP VIEW`',
            '`CREATE SCHEMA`, `CREATE DATABASE`',
          ]},
          { title: '7.8 DML (Data Manipulation Language)', topics: [
            '`INSERT INTO` — single row, multiple rows, `INSERT INTO ... SELECT`',
            '`UPDATE` — updating rows with `WHERE` clause',
            '`DELETE FROM` — deleting rows with `WHERE` clause',
            '`MERGE` (UPSERT) — combining insert and update',
            'Bulk insert techniques',
          ]},
          { title: '7.9 TCL (Transaction Control Language)', topics: [
            '`BEGIN TRANSACTION` / `START TRANSACTION`',
            '`COMMIT` — saving changes permanently',
            '`ROLLBACK` — undoing changes',
            '`SAVEPOINT` — partial rollback point',
            'ACID properties — Atomicity, Consistency, Isolation, Durability',
            'Isolation levels — Read Uncommitted, Read Committed, Repeatable Read, Serializable',
          ]},
          { title: '7.10 Advanced SQL', topics: [
            'EXPLAIN / EXPLAIN ANALYZE — query execution plans',
            'Query optimization — index usage, avoiding full table scans',
            'Partitioning — range, list, hash partitioning',
            'Materialized views — refreshing, use cases',
            'Stored procedures and functions',
            'Triggers — `BEFORE`/`AFTER` `INSERT`/`UPDATE`/`DELETE`',
          ]},
        ]
      },
      {
        id: 'mod8', num: 8,
        title: 'Pandas & NumPy',
        sections: [
          { title: '8.1 NumPy', topics: [
            '`ndarray` — creation (`np.array`, `np.zeros`, `np.ones`, `np.arange`, `np.linspace`)',
            'Array shapes, `reshape`, `flatten`, `ravel`',
            'Indexing and slicing — 1D, 2D, boolean indexing, fancy indexing',
            'Broadcasting rules',
            'Universal functions (ufuncs) — element-wise operations',
            'Aggregations — `sum`, `mean`, `std`, `min`, `max` with `axis` parameter',
            '`np.where` — conditional array operations',
            '`np.concatenate`, `np.stack`, `np.vstack`, `np.hstack`',
            'Random module — `np.random.seed`, `rand`, `randn`, `randint`',
          ]},
          { title: '8.2 Pandas — Data Structures', topics: [
            '`Series` — 1D labeled array, index, `.values`, `.index`, `.dtype`',
            '`DataFrame` — 2D labeled table, creation from dict/list/CSV/Excel/JSON',
            '`Index` types — `RangeIndex`, `DatetimeIndex`, `MultiIndex`',
            '`.dtypes`, `.shape`, `.info()`, `.describe()`',
          ]},
          { title: '8.3 Pandas — I/O', topics: [
            '`pd.read_csv()` — parameters: `sep`, `header`, `index_col`, `parse_dates`, `dtype`, `usecols`, `nrows`, `chunksize`',
            '`pd.read_json()`, `pd.read_excel()`, `pd.read_parquet()`, `pd.read_sql()`',
            '`df.to_csv()`, `df.to_json()`, `df.to_parquet()`, `df.to_excel()`',
          ]},
          { title: '8.4 Pandas — Selection & Filtering', topics: [
            'Column selection — `df[\'col\']`, `df[["col1","col2"]]`',
            'Row selection — `df.loc[]` (label-based), `df.iloc[]` (position-based)',
            'Boolean filtering — `df[df[\'col\'] > 5]`',
            '`.query()` method',
            '`.isin()`, `.between()`, `.str.contains()`',
          ]},
          { title: '8.5 Pandas — Data Cleaning', topics: [
            '`df.isnull()`, `df.notnull()`, `.isna()`, `.notna()`',
            '`df.dropna()` — `how`, `subset`, `thresh` parameters',
            '`df.fillna()` — scalar, forward fill (`ffill`), backward fill (`bfill`)',
            '`df.duplicated()`, `df.drop_duplicates()` — `subset`, `keep`',
            '`df.rename()` — columns and index',
            '`df.astype()` — type conversion',
            '`.str` accessor — string operations on Series',
            '`.dt` accessor — datetime operations on Series',
            '`pd.to_datetime()`, `pd.to_numeric()`',
          ]},
          { title: '8.6 Pandas — Transformation', topics: [
            '`df.apply()` — row-wise or column-wise function application',
            '`df.map()` / `Series.map()` — element-wise mapping',
            '`df.assign()` — adding new columns',
            '`df.sort_values()`, `df.sort_index()`',
            '`df.reset_index()`, `df.set_index()`',
          ]},
          { title: '8.7 Pandas — Aggregation', topics: [
            '`df.groupby()` — grouping by one or more columns',
            '`.agg()` — applying multiple aggregation functions',
            '`.transform()` — returning group-aligned results',
            '`.pivot_table()` and `pd.crosstab()`',
            '`df.resample()` — time-based grouping',
          ]},
          { title: '8.8 Pandas — Merging & Joining', topics: [
            '`pd.merge()` — `how`, `on`, `left_on`, `right_on`, `suffixes`',
            '`df.join()` — index-based join',
            '`pd.concat()` — `axis`, `ignore_index`, `keys`',
          ]},
        ]
      },
    ]
  },
  {
    id: 'phase3',
    icon: '🗂️',
    label: 'Phase 3',
    name: 'Apache Spark & PySpark',
    color: '#f97316',
    modules: [
      {
        id: 'mod9', num: 9,
        title: 'Apache Spark Architecture',
        sections: [
          { title: '9.1 Core Concepts', topics: [
            'What is Apache Spark? In-memory processing vs Hadoop MapReduce',
            'Spark components — Spark Core, Spark SQL, Spark Streaming, MLlib, GraphX',
            'Cluster architecture — Driver, Executors, Cluster Manager',
            'Driver program — SparkContext / SparkSession, DAG Scheduler, Task Scheduler',
            'Executor — JVM process running on worker nodes, task execution, in-memory storage',
            'Cluster Managers — Local mode, Standalone, YARN, Mesos, Kubernetes',
          ]},
          { title: '9.2 Spark Execution Model', topics: [
            'Jobs, Stages, Tasks — the hierarchy',
            'DAG (Directed Acyclic Graph) — how Spark plans execution',
            'Wide vs Narrow transformations — shuffle boundary',
            'Shuffle — what it is, why it\'s expensive (data movement across network)',
            'Stage boundaries — created at wide transformations (`groupBy`, `join`, `repartition`)',
            'Task = 1 partition processed by 1 executor thread',
            'Relation: 1 job → N stages → M tasks per stage',
            'Lazy evaluation — transformations are not executed until an action is called',
            'Actions that trigger execution — `collect()`, `count()`, `show()`, `write`, `save()`',
          ]},
          { title: '9.3 RDD vs DataFrames vs Datasets', topics: [
            'RDD (Resilient Distributed Dataset) — immutable, distributed, fault-tolerant',
            'RDD operations — transformations (`map`, `filter`, `flatMap`, `reduceByKey`) and actions',
            'DataFrames — distributed collection of rows with named columns, Catalyst optimizer',
            'Dataset API — typed API (Scala/Java), not available in Python',
            'When to use RDD vs DataFrame — performance reasons (Catalyst + Tungsten)',
            'Tungsten execution engine — off-heap memory management, code generation',
          ]},
          { title: '9.4 Key RDD Operations', topics: [
            '`map()` — apply function to each element, 1:1',
            '`flatMap()` — apply function, flatten result (1:N)',
            '`filter()` — keep elements matching predicate',
            '`reduceByKey()` — combine values with same key using a function',
            '`groupByKey()` — group values by key into iterator',
            '`reduceByKey` vs `groupByKey` — performance: `reduceByKey` does map-side combine first',
            '`mapPartitions()` — operate on entire partition at once (more efficient for DB connections)',
            '`sortByKey()`, `countByKey()`',
            '`union()`, `intersection()`, `subtract()`',
            '`join()`, `leftOuterJoin()`, `rightOuterJoin()`, `fullOuterJoin()` on Pair RDDs',
          ]},
        ]
      },
      {
        id: 'mod10', num: 10,
        title: 'PySpark DataFrames',
        sections: [
          { title: '10.1 SparkSession', topics: [
            '`SparkSession.builder` — `appName`, `config`, `getOrCreate()`',
            '`spark.sparkContext` — underlying SparkContext',
            'Spark configurations — `spark.conf.set()`, `spark.conf.get()`',
            'Setting master — `local[*]`, `local[4]`, `yarn`, `spark://host:port`',
          ]},
          { title: '10.2 Reading Data', topics: [
            '`spark.read.csv()` — `header`, `inferSchema`, `schema`, `sep`, `nullValue`',
            '`spark.read.json()` — single line vs multi-line JSON',
            '`spark.read.parquet()` — schema on read, partition discovery',
            '`spark.read.format()...load()` — generic reader',
            'Defining schema manually — `StructType`, `StructField`, data types',
            'Reading from Delta — `spark.read.format("delta")`',
            'Reading from ADLS Gen2, S3',
          ]},
          { title: '10.3 DataFrame Transformations', topics: [
            '`df.select()` — selecting columns (`col()`, `F.col()`, strings)',
            '`df.filter()` / `df.where()` — filtering rows',
            '`df.withColumn()` — adding or replacing a column',
            '`df.withColumnRenamed()` — renaming a column',
            '`df.drop()` — removing columns',
            '`df.dropDuplicates()` / `df.distinct()` — deduplication',
            '`df.orderBy()` / `df.sort()` — sorting',
            '`df.limit()` — taking top N rows',
            '`df.union()` / `df.unionByName()` — combining DataFrames',
            '`df.sample()` — random sampling',
          ]},
          { title: '10.4 Column Functions (pyspark.sql.functions)', topics: [
            'Math — `abs`, `round`, `floor`, `ceil`, `sqrt`, `pow`, `log`',
            'String — `upper`, `lower`, `trim`, `substring`, `concat`, `concat_ws`, `split`, `regexp_replace`, `regexp_extract`',
            'Date/Time — `current_date`, `current_timestamp`, `to_date`, `to_timestamp`, `date_format`, `datediff`, `year`, `month`',
            'Conditional — `when().otherwise()`, `coalesce()`, `isnull()`, `isnan()`',
            '`lit()` — creating a literal column',
            '`cast()` — type casting',
            'Array functions — `array_contains`, `explode`, `collect_list`, `collect_set`, `size`',
          ]},
          { title: '10.5 Aggregations & GroupBy', topics: [
            '`df.groupBy().agg()` — applying multiple aggregate functions',
            '`count()`, `sum()`, `avg()`, `mean()`, `min()`, `max()`, `first()`, `last()`',
            '`countDistinct()`, `approx_count_distinct()`',
            '`df.rollup()`, `df.cube()` — multi-dimensional aggregations',
            '`pivot()` — pivoting rows to columns',
          ]},
          { title: '10.6 Joins in PySpark', topics: [
            '`df.join(other, on, how)` — `inner`, `left`, `right`, `outer`, `semi`, `anti`, `cross`',
            'Join on single column, multiple columns, complex condition',
            'Broadcast Join — `F.broadcast(small_df)` — for small table optimization',
            'How broadcast join works — driver sends small table to all executors, avoiding shuffle',
            'Skew joins — salting technique to handle data skew',
          ]},
          { title: '10.7 Window Functions in PySpark', topics: [
            '`Window.partitionBy()`, `Window.orderBy()`',
            'Frame — `rowsBetween()`, `rangeBetween()`',
            'Ranking — `row_number()`, `rank()`, `dense_rank()`, `percent_rank()`, `ntile()`',
            'Offset — `lag()`, `lead()`',
            'Aggregate window — `sum().over(window)`, `avg().over(window)`',
            'Running totals, moving averages with window functions',
          ]},
          { title: '10.8 Writing Data', topics: [
            '`df.write.csv()`, `df.write.parquet()`, `df.write.json()`',
            '`df.write.format()...save()`',
            'Save modes — `overwrite`, `append`, `ignore`, `errorIfExists`',
            'Writing to Delta — `df.write.format("delta")`',
            'Partitioned writes — `partitionBy()`',
            '`df.write.saveAsTable()` — writing to Hive metastore',
          ]},
          { title: '10.9 Partitioning', topics: [
            'What is a partition in Spark? Relation to task parallelism',
            '`repartition(n)` — full shuffle to n partitions (evenly distributed)',
            '`coalesce(n)` — reduce partitions with minimal shuffle',
            '`repartition(n, col)` — hash partition by column',
            'Optimal partition count — `spark.sql.shuffle.partitions` (default 200)',
            'Rule of thumb — 128MB per partition, 2-4x number of cores',
          ]},
          { title: '10.10 Caching & Persistence', topics: [
            '`df.cache()` — shortcut for `MEMORY_AND_DISK`',
            '`df.persist(StorageLevel)` — `MEMORY_ONLY`, `MEMORY_AND_DISK`, `DISK_ONLY`',
            '`df.unpersist()` — releasing cached data',
            'When to cache — reused DataFrames in iterative algorithms',
            'Spark UI — Storage tab to verify what is cached',
          ]},
        ]
      },
      {
        id: 'mod11', num: 11,
        title: 'Spark SQL & Optimization',
        sections: [
          { title: '11.1 Spark SQL', topics: [
            '`spark.sql("SELECT ...")` — running SQL queries',
            '`df.createOrReplaceTempView("name")` — registering as temp view',
            '`df.createOrReplaceGlobalTempView("name")` — global across sessions',
            'Spark catalog — `spark.catalog.listTables()`, `listColumns()`',
            'Hive metastore integration',
            '`spark.sql.warehouse.dir` — default database location',
          ]},
          { title: '11.2 Catalyst Optimizer', topics: [
            'Analysis — resolving column references, types',
            'Logical plan → Optimized logical plan → Physical plan',
            'Optimization rules — predicate pushdown, column pruning, constant folding',
            '`df.explain()` — viewing physical plan (`True` for verbose)',
            '`df.explain("extended")` — all plan stages',
          ]},
          { title: '11.3 Spark Performance Optimization', topics: [
            'Shuffle optimization — minimize shuffles, use `reduceByKey` over `groupByKey`',
            'Predicate pushdown — filter early, push filters to data source',
            'Column pruning — `select` only needed columns',
            'Broadcast join — broadcast small tables (`spark.sql.autoBroadcastJoinThreshold`, default 10MB)',
            'Partition tuning — `spark.sql.shuffle.partitions`, avoid too-few or too-many partitions',
            'Skew handling — salting skewed keys, `skewHint`',
            'AQE (Adaptive Query Execution) — `spark.sql.adaptive.enabled`',
            'Caching strategy — cache DataFrames used multiple times',
            'Tungsten — off-heap memory, whole-stage code generation',
            'File format — prefer Parquet/Delta over CSV/JSON for analytics',
            'Avoiding `collect()` — pulling all data to driver is dangerous with large datasets',
          ]},
          { title: '11.4 Submitting Spark Jobs', topics: [
            '`spark-submit` — `--master`, `--deploy-mode`, `--executor-memory`, `--num-executors`, `--driver-memory`, `--py-files`',
            '`client` vs `cluster` deploy mode',
            'Cluster mode on YARN — `--master yarn --deploy-mode cluster`',
            'Monitoring via Spark UI (port 4040) — Jobs, Stages, Tasks, Storage, Environment, SQL',
          ]},
        ]
      },
    ]
  },
  {
    id: 'phase4',
    icon: '🗂️',
    label: 'Phase 4',
    name: 'Azure Data Engineering',
    color: '#3b82f6',
    modules: [
      {
        id: 'mod12', num: 12,
        title: 'Azure Fundamentals',
        sections: [
          { title: '12.1 Azure Portal & Subscriptions', topics: [
            'Azure Portal navigation — services, resource groups, search',
            'Subscriptions — billing boundary, management groups hierarchy',
            'Resource Groups — logical container, lifecycle management, tagging strategy',
            'Azure Resource Manager (ARM) — declarative templates',
            'Azure regions and availability zones',
            'Cost management and billing — cost analysis, budgets, alerts',
          ]},
          { title: '12.2 Azure Networking', topics: [
            'VNet (Virtual Network) — private network in Azure, address space (CIDR)',
            'Subnets — dividing VNet, subnet delegation',
            'NSG (Network Security Group) — inbound/outbound rules, priority, allow/deny',
            'Service Endpoints — secure VNet-to-Azure service connection',
            'Private Endpoints — private IP for Azure service within your VNet',
            'VNet Peering — connecting VNets',
            'Firewall rules on storage accounts',
          ]},
          { title: '12.3 Azure Storage Accounts', topics: [
            'Storage account types — Standard (HDD) vs Premium (SSD)',
            'Storage services — Blob, File, Queue, Table',
            'Access tiers — Hot, Cool, Archive',
            'Redundancy — LRS, ZRS, GRS, RA-GRS',
            'Soft delete and versioning',
            'Lifecycle management policies',
          ]},
        ]
      },
      {
        id: 'mod13', num: 13,
        title: 'Azure Data Lake Storage Gen2 (ADLS)',
        sections: [
          { title: '13.1 ADLS Fundamentals', topics: [
            'ADLS Gen2 = Azure Blob Storage + hierarchical namespace',
            'Hierarchical Namespace (HNS) — directory semantics, atomic operations on directories',
            'Containers — top-level organization unit',
            'Folders and files within containers',
            'Performance optimization with HNS — rename a directory = O(1) operation',
          ]},
          { title: '13.2 ADLS Storage Structure Best Practices', topics: [
            'Medallion architecture folder layout — `raw/`, `bronze/`, `silver/`, `gold/`',
            'Partitioned folder structure — `year=2024/month=01/day=01/`',
            'Naming conventions — lowercase, hyphens, no spaces',
            'Blob storage access patterns — hot vs cold data placement',
          ]},
          { title: '13.3 Accessing ADLS from Python', topics: [
            '`azure-storage-blob` SDK — `BlobServiceClient`, `ContainerClient`, `BlobClient`',
            'Upload — `upload_blob()`, download — `download_blob()`',
            '`azure-storage-file-datalake` SDK — `DataLakeServiceClient`',
            'Using `abfs://` URI scheme — `abfs://container@storageaccount.dfs.core.windows.net/path`',
            'Authentication — connection string, account key, SAS token, service principal, managed identity',
          ]},
          { title: '13.4 Mounting ADLS in Databricks', topics: [
            '`dbutils.fs.mount()` — mounting ADLS using service principal',
            'OAuth 2.0 configuration for mounting',
            'Accessing files after mount — `/mnt/adls/path`',
            '`dbutils.secrets.get()` — retrieving secrets from Key Vault',
            'Direct access without mounting — `abfss://` in Spark config',
          ]},
        ]
      },
      {
        id: 'mod14', num: 14,
        title: 'Azure Security & Identity',
        sections: [
          { title: '14.1 Azure Active Directory (AAD) / Entra ID', topics: [
            'Tenants — AAD tenant, tenant ID',
            'Users, Groups, Service Principals, Managed Identities',
            'Service Principal — application identity (App Registration), client ID, client secret, certificate',
            'Managed Identity — system-assigned vs user-assigned, no credential management needed',
          ]},
          { title: '14.2 RBAC (Role-Based Access Control)', topics: [
            'Principals — user, group, service principal, managed identity',
            'Roles — built-in roles (`Owner`, `Contributor`, `Reader`, `Storage Blob Data Contributor`)',
            'Scope — management group, subscription, resource group, resource',
            'Role assignment — assigning role to principal at scope',
            'Custom roles — defining specific permissions',
          ]},
          { title: '14.3 ADLS Access Control', topics: [
            'Azure RBAC vs POSIX ACLs (Access Control Lists) on ADLS Gen2',
            'ACL types — access ACL, default ACL',
            'Granting service principal access to ADLS — `Storage Blob Data Contributor`',
            'SAS (Shared Access Signature) tokens — account SAS, service SAS, user delegation SAS',
            'SAS parameters — permissions, expiry, allowed IPs, protocols',
            'Storage account access keys — primary/secondary key (avoid using directly, prefer RBAC/SAS)',
          ]},
          { title: '14.4 Azure Key Vault', topics: [
            'Key Vault uses — secrets, keys (encryption), certificates',
            '`SecretClient` in Python — `get_secret()`, `set_secret()`',
            'Key Vault-backed secret scope in Databricks',
            'Access policies vs RBAC for Key Vault',
          ]},
        ]
      },
      {
        id: 'mod15', num: 15,
        title: 'Azure Data Factory (ADF)',
        sections: [
          { title: '15.1 ADF Fundamentals', topics: [
            'What is ADF? Cloud-based ETL/ELT orchestration service',
            'ADF components — Pipelines, Activities, Datasets, Linked Services, Triggers, Integration Runtimes',
            'ADF vs Databricks — orchestration vs transformation',
          ]},
          { title: '15.2 Linked Services & Datasets', topics: [
            'Linked Service — connection definition (think connection string)',
            'Linked Service types — Azure Blob, ADLS Gen2, Databricks, SQL DB, HTTP, REST API, Snowflake',
            'Authentication in Linked Services — account key, SAS, service principal, managed identity',
            'Dataset — schema + location pointer referencing a Linked Service',
            'Parameterized datasets — dynamic file paths using parameters',
          ]},
          { title: '15.3 Activities', topics: [
            'Copy Activity — moving data from source to sink, column mapping, schema handling',
            'Data Flow Activity — visual ETL (Mapping Data Flows)',
            'Notebook Activity — running Databricks notebooks from ADF',
            'Execute Pipeline Activity — calling child pipelines',
            'Get Metadata Activity — checking file existence, folder contents',
            'If Condition Activity — conditional branching',
            'ForEach Activity — iterating over a list',
            'Set Variable Activity, Append Variable Activity',
            'Web Activity — calling REST APIs',
            'Lookup Activity — reading data for use in pipeline logic',
            'Delete Activity — deleting files/rows',
          ]},
          { title: '15.4 Parameterization & Dynamic Content', topics: [
            'Pipeline parameters — `@pipeline().parameters.paramName`',
            'Variables — `@variables(\'varName\')`',
            'Dynamic expressions — `@concat()`, `@formatDateTime()`, `@utcnow()`',
            'Dynamic file paths — `@concat(\'raw/\', formatDateTime(utcnow(), \'yyyy/MM/dd\'), \'/file.csv\')`',
            'Environment configs — dev/test/prod using parameter files',
          ]},
          { title: '15.5 Triggers', topics: [
            'Schedule trigger — cron expression, timezone, start/end time',
            'Tumbling window trigger — fixed non-overlapping time windows, supports backfill',
            'Event trigger — Blob created/deleted in storage',
            'Manual trigger',
          ]},
          { title: '15.6 Error Handling & Monitoring', topics: [
            'Activity-level retry — retry count, retry interval',
            'Dependency conditions — `Succeeded`, `Failed`, `Skipped`, `Completed`',
            'Email notifications on failure — using Web Activity + Logic Apps',
            'ADF Monitor — pipeline run history, activity runs, trigger runs',
            'Diagnostic logs — sending to Log Analytics',
            'Schema drift — handling unexpected schema changes in data',
          ]},
          { title: '15.7 Integration Runtimes', topics: [
            'Azure IR — cloud-based, auto-scale',
            'Self-Hosted IR (SHIR) — on-premises connectivity',
            'Azure-SSIS IR — running SSIS packages',
          ]},
        ]
      },
      {
        id: 'mod16', num: 16,
        title: 'Azure Databricks',
        sections: [
          { title: '16.1 Databricks Workspace', topics: [
            'Workspace components — Notebooks, Clusters, Jobs, Data, Repos',
            'Notebooks — cell types (Python, Scala, SQL, R, Markdown), magic commands (`%python`, `%sql`, `%md`, `%sh`, `%fs`)',
            '`dbutils` — utilities for file system, secrets, widgets, notebook execution',
            '`dbutils.fs` — `ls`, `cp`, `mv`, `rm`, `mkdirs`, `mount`',
            '`dbutils.widgets` — notebook parameters for parameterized execution',
            '`dbutils.notebook.run()` — calling notebooks from notebooks',
          ]},
          { title: '16.2 Clusters', topics: [
            'Cluster types — All-purpose (interactive) vs Job clusters (automated, cheaper)',
            'Single node vs multi-node clusters',
            'Cluster configuration — runtime version, node types, min/max workers (autoscaling), Photon',
            'Databricks Runtime (DBR) versions — standard, ML, Genomics',
            'Cluster policies — enforcing configurations for governance',
            'Init scripts — running scripts at cluster startup',
            'Libraries — PyPI, Maven, DBFS, workspace',
          ]},
          { title: '16.3 Structured Streaming in Databricks', topics: [
            'What is structured streaming? Continuous processing model',
            '`readStream` — reading from Kafka, ADLS, Delta (autoloader)',
            'Output modes — `append`, `complete`, `update`',
            '`writeStream` — `.trigger()`, `.checkpointLocation`, `.format("delta")`',
            'Auto Loader — `cloudFiles` format, schema inference and evolution, incremental file discovery',
            'Watermarking — handling late data',
            'Streaming aggregations, streaming joins',
          ]},
          { title: '16.4 Databricks Jobs', topics: [
            'Creating jobs — single task vs multi-task jobs',
            'Job parameters — passing parameters to notebooks/scripts',
            'Job schedules — cron, manual trigger',
            'Job clusters vs existing clusters',
            'Job monitoring — run history, alerts, repair runs',
          ]},
          { title: '16.5 Databricks Repos (Git Integration)', topics: [
            'Connecting to GitHub/Azure DevOps',
            'Committing, pushing, pulling from within Databricks',
            'Branch management in Databricks Repos',
          ]},
        ]
      },
      {
        id: 'mod17', num: 17,
        title: 'Delta Lake',
        sections: [
          { title: '17.1 Delta Lake Fundamentals', topics: [
            'What is Delta Lake? Open-source storage layer on top of Parquet',
            'Delta table structure — data files (Parquet) + `_delta_log/` transaction log',
            'Transaction log — JSON files recording each transaction (add, remove, metadata)',
            'How Delta enables ACID transactions on a data lake',
          ]},
          { title: '17.2 ACID Properties in Delta', topics: [
            'Atomicity — all-or-nothing writes (commit or rollback)',
            'Consistency — schema enforcement, data quality constraints',
            'Isolation — concurrent reader/writer support (optimistic concurrency control)',
            'Durability — committed data persisted reliably',
          ]},
          { title: '17.3 Delta Operations', topics: [
            'Creating Delta tables — `df.write.format("delta").save()` or `CREATE TABLE ... USING DELTA`',
            '`MERGE` (Upsert) — `WHEN MATCHED THEN UPDATE`, `WHEN NOT MATCHED THEN INSERT`',
            '`UPDATE` and `DELETE` on Delta tables',
            '`INSERT INTO`, `INSERT OVERWRITE`',
            '`OPTIMIZE` — compacting small files into larger Parquet files',
            '`VACUUM` — removing old files (default 7-day retention)',
            '`CONVERT TO DELTA` — converting existing Parquet to Delta',
          ]},
          { title: '17.4 Time Travel', topics: [
            'Accessing previous versions — `VERSION AS OF n`, `TIMESTAMP AS OF \'2024-01-01\'`',
            '`DESCRIBE HISTORY tableName` — viewing version history',
            'Restoring a table — `RESTORE TABLE TO VERSION AS OF n`',
            'Audit trail and compliance use cases',
          ]},
          { title: '17.5 Schema Management', topics: [
            'Schema enforcement — Delta rejects data with incompatible schema by default',
            'Schema evolution — `mergeSchema` option for adding new columns',
            'Column mapping — renaming/dropping columns without data rewrite',
            'Generated columns — computed from other columns',
          ]},
          { title: '17.6 Performance Optimization', topics: [
            'Z-Ordering — multi-dimensional clustering of data — `OPTIMIZE ... ZORDER BY (col1, col2)`',
            'How Z-Order works — Z-Curve (space-filling curve), data skipping via min/max statistics',
            'Partitioning in Delta — `partitionBy()` for high-cardinality column filtering',
            'Partition vs Z-Order — partitioning for low cardinality, Z-order for high cardinality',
            'Data skipping — automatic with Delta statistics',
            'Bloom filter indexes — `CREATE BLOOMFILTER INDEX`',
            'Liquid Clustering (Databricks) — replacing Z-Order with incremental clustering',
          ]},
          { title: '17.7 Medallion Architecture', topics: [
            'Raw Layer — exact copy of source data (immutable, append only)',
            'Bronze Layer — parsed, typed, lightly transformed, retain history',
            'Silver Layer — cleaned, deduplicated, conformed, enriched data',
            'Gold Layer — aggregated, business-level, ready for BI/ML',
            'Delta Live Tables (DLT) — declarative pipeline framework for Medallion',
          ]},
        ]
      },
      {
        id: 'mod18', num: 18,
        title: 'Azure Performance & Optimization',
        sections: [
          { title: '18.1 Spark Optimization on Databricks', topics: [
            'Photon Engine — Databricks-native vectorized query engine',
            'DBIO Cache — SSD caching of remote data',
            'Cluster sizing — memory-optimized, compute-optimized, storage-optimized nodes',
            'DBU (Databricks Unit) — billing unit',
            'Autoscaling clusters — min/max worker configuration',
          ]},
          { title: '18.2 ADLS Performance', topics: [
            'Small file problem — too many small files degrade performance',
            '`OPTIMIZE` — solving small file problem in Delta',
            'Partition pruning — filtering by partition columns in queries',
            'File size recommendations — 128MB to 1GB per Parquet file',
          ]},
        ]
      },
      {
        id: 'mod19', num: 19,
        title: 'Monitoring, CI/CD & DataOps',
        sections: [
          { title: '19.1 Monitoring & Observability', topics: [
            'ADF monitoring — pipeline runs, activity runs, trigger runs',
            'Databricks Job monitoring — run status, cluster metrics',
            'Azure Monitor — metrics, logs, alerts',
            'Log Analytics Workspace — querying logs with KQL (Kusto Query Language)',
            'Spark UI — Stages, Jobs, SQL, Storage tabs',
            'Custom logging in PySpark — Python `logging` module in notebooks',
            'Data quality monitoring — checks in pipeline (Great Expectations, custom)',
            'Alerting — email/Teams alerts on pipeline failures',
          ]},
          { title: '19.2 CI/CD for Data Engineering', topics: [
            'Git integration with ADF — ARM templates, publish branch (`adf_publish`)',
            'ADF export as ARM templates — deploying to dev/test/prod',
            'Git integration with Databricks — Repos feature',
            'GitHub Actions / Azure DevOps Pipelines for data engineering',
            'Branching strategy — feature → dev → main',
            'PR workflow — code review, automated tests before merge',
            'Testing notebooks — `dbutils.notebook.run()` for integration testing',
            'Wheel packages — packaging PySpark utility code',
          ]},
          { title: '19.3 Infrastructure as Code (IaC)', topics: [
            'Terraform — `provider`, `resource`, `variable`, `output`, `module`',
            'Terraform workflow — `init`, `plan`, `apply`, `destroy`',
            'Terraform state — remote state in Azure Storage',
            'ARM Templates — JSON-based Azure resource definitions',
            'Bicep — simplified ARM template syntax',
          ]},
        ]
      },
    ]
  },
  {
    id: 'phase5',
    icon: '🗂️',
    label: 'Phase 5',
    name: 'Business Intelligence (Power BI)',
    color: '#ec4899',
    modules: [
      {
        id: 'mod20', num: 20,
        title: 'Power BI Fundamentals',
        sections: [
          { title: '20.1 Power BI Desktop Interface', topics: [
            'Report View — building visuals',
            'Data View — inspecting underlying data tables',
            'Model View — managing table relationships',
            'Field pane, Visualizations pane, Filters pane',
          ]},
          { title: '20.2 Data Import & Connections', topics: [
            'Connecting to sources — CSV, Excel, SQL Server, Azure SQL, ADLS, Web, REST API',
            'Import mode vs DirectQuery vs Live Connection — tradeoffs',
            'Composite models — combining import and DirectQuery',
            'Scheduled refresh requirements — Power BI Gateway for on-premises',
          ]},
          { title: '20.3 Data Exploration', topics: [
            'Column profiles — distribution, quality, top values',
            'Data types — Text, Whole Number, Decimal, Date, Date/Time, Boolean, Binary',
            '`Table.Profile` for data profiling',
          ]},
        ]
      },
      {
        id: 'mod21', num: 21,
        title: 'Power Query (M Language)',
        sections: [
          { title: '21.1 Power Query Editor', topics: [
            'Query steps — applied steps list, step reordering',
            'Query dependencies — disabling load for staging queries',
            'Advanced Editor — viewing/editing M code directly',
          ]},
          { title: '21.2 Data Cleaning in Power Query', topics: [
            'Removing duplicates — `Table.Distinct()`',
            'Handling nulls — replace values, remove rows with nulls',
            'Filtering rows — custom filter conditions',
            'Removing/keeping columns — `Table.SelectColumns`, `Table.RemoveColumns`',
            'Renaming columns — `Table.RenameColumns`',
            'Changing data types — `Table.TransformColumnTypes`',
            'Splitting columns — by delimiter, by position',
            'Text transformations — Trim, Clean, Upper, Lower, Capitalize Each Word, Extract',
            'Replace values — `Table.ReplaceValue`',
          ]},
          { title: '21.3 Advanced Power Query', topics: [
            'Query parameters — creating reusable parameters (date range, threshold)',
            'Custom functions — `(parameter) => expression` syntax',
            'Conditional columns — `if ... then ... else`',
            'Index columns — `Table.AddIndexColumn`',
            'Merge (JOIN) — `Table.NestedJoin`, join kinds (Inner, Left, Right, Full, Anti)',
            'Append (UNION) — `Table.Combine`',
            'Expanding nested columns — expanding lists/tables/records',
            'Group By — `Table.Group` — custom aggregations',
            'Pivot/Unpivot columns',
          ]},
          { title: '21.4 M Language Essentials', topics: [
            'M is case-sensitive and functional',
            '`let ... in` expression',
            'Data types in M — `type text`, `type number`, `type date`, etc.',
            'Records — `[Field = Value]`',
            'Lists — `{1, 2, 3}`',
            'Tables — `#table(...)`',
            '`each` keyword — shorthand for anonymous function',
          ]},
        ]
      },
      {
        id: 'mod22', num: 22,
        title: 'Data Modeling in Power BI',
        sections: [
          { title: '22.1 Relationships', topics: [
            'Creating relationships — drag-and-drop in Model View',
            'Relationship properties — cardinality, cross-filter direction',
            'Cardinality types — One-to-Many (1:*), One-to-One (1:1), Many-to-Many (*:*)',
            'Cross-filter direction — Single vs Both (bidirectional)',
            'Active vs inactive relationships — `USERELATIONSHIP()` in DAX',
            'Ambiguous relationship paths — why they cause issues',
          ]},
          { title: '22.2 Star Schema Design', topics: [
            'Fact table — numeric measures, foreign keys to dimensions, high row count',
            'Dimension table — descriptive attributes, low row count, wide columns',
            'Example — Orders fact + Customer/Product/Date/Region dimensions',
            'Why star schema over flat table — performance, simplicity for DAX',
            'Role-playing dimensions — same dimension used multiple times',
            'Degenerate dimensions — dimension attributes stored in fact table',
          ]},
          { title: '22.3 Semantic Modeling', topics: [
            'Hiding columns from report view — foreign keys, internal columns',
            'Formatting columns — display format, currency, date format',
            'Sort column by — sorting text by a numeric sort order column',
            'Data categories — City, Country, Longitude, Latitude for maps',
            'Synonyms — for Q&A natural language queries',
            'Mark as Date Table — required for time intelligence DAX',
          ]},
        ]
      },
      {
        id: 'mod23', num: 23,
        title: 'DAX (Data Analysis Expressions)',
        sections: [
          { title: '23.1 DAX Fundamentals', topics: [
            'Measures vs Calculated Columns — when to use each',
            'Measures — computed at query time, depend on filter context',
            'Calculated Columns — computed at data refresh, stored in model, row context',
            'DAX syntax — `Measure = FUNCTION(arguments)`',
            'Data types in DAX — Decimal, Integer, Boolean, Text, DateTime, Blank',
          ]},
          { title: '23.2 Basic DAX Functions', topics: [
            '`SUM()`, `SUMX()` — aggregation vs iterator',
            '`COUNT()`, `COUNTA()`, `COUNTROWS()`, `DISTINCTCOUNT()`',
            '`AVERAGE()`, `AVERAGEX()`',
            '`MIN()`, `MAX()`, `MINX()`, `MAXX()`',
            '`IF()`, `IFERROR()`, `SWITCH()`',
            '`BLANK()`, `ISBLANK()`',
            '`CONCATENATE()`, `FORMAT()`, `LEFT()`, `RIGHT()`, `MID()`',
            '`TODAY()`, `NOW()`, `YEAR()`, `MONTH()`, `DAY()`',
          ]},
          { title: '23.3 CALCULATE & Context Modification', topics: [
            '`CALCULATE(expression, filter1, filter2, ...)` — the most important DAX function',
            'How `CALCULATE` modifies filter context',
            '`FILTER()` — returning a table matching a condition',
            '`ALL()` — removing all filters from a table or column',
            '`ALLEXCEPT()` — removing all filters except specified columns',
            '`ALLSELECTED()` — respecting outer visual filters only',
            '`KEEPFILTERS()` — intersecting rather than overriding filters',
            '`REMOVEFILTERS()`',
          ]},
          { title: '23.4 Context — Row vs Filter', topics: [
            'Row context — when DAX evaluates each row (calculated columns, iterators)',
            'Filter context — set of filters active during measure evaluation',
            'Context transition — `CALCULATE` converts row context to filter context',
            '`EARLIER()` — referencing outer row context in nested calculations',
          ]},
          { title: '23.5 Time Intelligence Functions', topics: [
            'Requires marked Date table with contiguous dates',
            '`TOTALYTD()`, `TOTALQTD()`, `TOTALMTD()` — year/quarter/month-to-date',
            '`SAMEPERIODLASTYEAR()` — prior year comparison',
            '`DATEADD()` — shifting dates by n intervals',
            '`DATESYTD()`, `DATESBETWEEN()`, `DATESPERIOD()`',
            '`PREVIOUSMONTH()`, `PREVIOUSQUARTER()`, `PREVIOUSYEAR()`',
          ]},
          { title: '23.6 Advanced DAX', topics: [
            'Variables — `VAR x = ... RETURN` — improve readability and performance',
            'Iterator functions — `SUMX`, `AVERAGEX`, `COUNTX`, `MAXX`, `MINX`, `RANKX`',
            '`RANKX()` — ranking with ties, dense rank',
            '`TOPN()` — returning top N rows from a table',
            '`RELATED()` — looking up related table values (many-to-one)',
            '`RELATEDTABLE()` — getting related table on the many side',
            '`LOOKUPVALUE()` — like VLOOKUP in DAX',
            '`SELECTEDVALUE()` — getting the single filtered value of a column',
            '`DIVIDE()` — safe division (avoids divide-by-zero errors)',
            '`VALUES()`, `DISTINCT()` — returning unique values as a table',
          ]},
        ]
      },
      {
        id: 'mod24', num: 24,
        title: 'Power BI Visualization & Deployment',
        sections: [
          { title: '24.1 Visualizations', topics: [
            'Chart types — Bar, Column, Line, Area, Combo, Pie, Donut, Funnel, Waterfall, Scatter, Bubble',
            'Tables and Matrices — subtotals, conditional formatting, column formatting',
            'KPI cards — Card visual, KPI visual',
            'Slicers — list, dropdown, between, relative date',
            'Maps — basic map, filled map, ArcGIS, Azure Maps',
            'Decomposition Tree, Key Influencers, Q&A visual',
            'Custom visuals from AppSource',
          ]},
          { title: '24.2 Report Design & UX', topics: [
            'Page layout — canvas size, page navigation',
            'Themes — JSON-based theme customization',
            'Conditional formatting — background color, font color, data bars, icons',
            'Bookmarks and selections — toggle visibility, report navigation',
            'Drill-through — right-click to navigate to detail page',
            'Drill-down — expanding hierarchy levels in chart',
            'Tooltips — custom tooltip pages',
          ]},
          { title: '24.3 Power BI Service', topics: [
            'Publishing reports from Desktop — `Publish` button',
            'Workspaces — personal workspace vs collaborative workspace',
            'Datasets, Reports, Dashboards distinction in Service',
            'Dashboards — pinning visuals from multiple reports',
            'Scheduled refresh — configuring refresh frequency, gateway requirement',
            'Row-Level Security (RLS) — creating roles in Desktop, assigning members in Service',
            'Dynamic RLS — `USERPRINCIPALNAME()` for user-specific filtering',
            'Sharing — sharing reports, workspace access, apps',
            'Power BI Apps — bundling reports/dashboards for distribution',
            'Incremental Refresh — partition-based refresh for large tables',
          ]},
          { title: '24.4 Advanced Power BI Tools', topics: [
            'DAX Studio — testing DAX queries, execution plan, server timings',
            'Tabular Editor — bulk editing measures, best practice analyzer',
            'ALM Toolkit — comparing and deploying data model changes',
          ]},
        ]
      },
    ]
  },
  {
    id: 'phase6',
    icon: '🗂️',
    label: 'Phase 6',
    name: 'Generative AI for Data',
    color: '#8b5cf6',
    modules: [
      {
        id: 'mod25', num: 25,
        title: 'LLM Fundamentals',
        sections: [
          { title: '25.1 Transformer Architecture', topics: [
            'Attention mechanism — self-attention, scaled dot-product attention',
            'Multi-head attention',
            'Encoder-only (BERT), Decoder-only (GPT), Encoder-Decoder (T5) architectures',
            'Tokens and tokenization — BPE (Byte Pair Encoding), WordPiece',
            'Context window — maximum token limit',
            'Temperature — controlling randomness in outputs',
            'Top-p (nucleus sampling), Top-k sampling',
          ]},
          { title: '25.2 Large Language Models', topics: [
            'GPT family — GPT-3.5, GPT-4, GPT-4o (OpenAI)',
            'Claude family — Claude 3, Claude 3.5 (Anthropic)',
            'Llama family — Meta\'s open-source models',
            'Gemini (Google)',
            'Fine-tuning vs prompting vs RAG — when to use each approach',
            'Pre-training vs fine-tuning vs RLHF (Reinforcement Learning from Human Feedback)',
          ]},
          { title: '25.3 Prompt Engineering', topics: [
            'Zero-shot prompting — asking directly without examples',
            'Few-shot prompting — providing examples in the prompt',
            'Chain-of-Thought (CoT) prompting — "think step by step"',
            'System prompts — setting assistant behavior and role',
            'Role prompting — "You are an expert data engineer..."',
            'Output formatting — asking for JSON, markdown, tables',
            'Prompt templates — parameterized reusable prompts',
            'ReAct pattern — Reasoning + Acting interleaved',
          ]},
        ]
      },
      {
        id: 'mod26', num: 26,
        title: 'RAG & Vector Databases',
        sections: [
          { title: '26.1 RAG (Retrieval-Augmented Generation)', topics: [
            'Why RAG? LLMs have knowledge cutoffs and hallucinate',
            'RAG pipeline — Ingestion (chunk → embed → store) + Retrieval (query → embed → search) + Generation',
            'Document chunking strategies — fixed size, recursive, semantic, sentence-based',
            'Chunk overlap — avoiding context loss at boundaries',
            'Reranking — cross-encoder reranking of retrieved chunks',
            'Hybrid search — combining dense (vector) + sparse (BM25/keyword) retrieval',
          ]},
          { title: '26.2 Embeddings', topics: [
            'What are embeddings? Dense vector representations of semantic meaning',
            'Embedding models — `text-embedding-ada-002` (OpenAI), `sentence-transformers`, `BGE`',
            'Cosine similarity — measuring vector closeness',
            'Embedding dimensions — 768, 1536, 3072 common sizes',
            'Bi-encoder vs cross-encoder for search',
          ]},
          { title: '26.3 Vector Databases', topics: [
            'Purpose — storing and searching high-dimensional vectors at scale',
            'Approximate Nearest Neighbor (ANN) search — HNSW, IVF-PQ algorithms',
            'Popular options — Pinecone, Weaviate, Milvus, Chroma, Qdrant, pgvector, Azure AI Search',
            'Metadata filtering — filtering by attributes alongside vector search',
            'Namespaces/collections — organizing vectors',
          ]},
          { title: '26.4 LangChain Framework', topics: [
            'LangChain components — Models, Prompts, Chains, Agents, Tools, Memory, Indexes',
            '`ChatOpenAI`, `AzureChatOpenAI` — LLM wrappers',
            '`PromptTemplate`, `ChatPromptTemplate`',
            '`LLMChain` — basic chain',
            '`RetrievalQA` chain — RAG chain',
            '`ConversationalRetrievalChain` — RAG with memory',
            'Document loaders — PDF, CSV, URL, DOCX',
            'Text splitters — `RecursiveCharacterTextSplitter`',
            'Vector stores in LangChain — `Chroma`, `FAISS`, `Pinecone`',
            'Agents — ReAct agents, tool use, LangChain Agents',
            'Memory — `ConversationBufferMemory`, `ConversationSummaryMemory`',
          ]},
          { title: '26.5 Azure OpenAI Service', topics: [
            'Azure OpenAI vs OpenAI API — compliance, private networking, SLA',
            'Deploying models — creating deployments in Azure',
            'Azure OpenAI Python SDK — `AzureOpenAI` client',
            'Chat completions, embeddings, DALL-E endpoints',
            'Responsible AI content filtering',
            'Azure AI Search — integrated vector search for RAG on Azure',
          ]},
          { title: '26.6 Text-to-SQL & Data Applications', topics: [
            'Using LLMs to generate SQL from natural language',
            'Schema-aware prompting — providing table definitions in system prompt',
            'Prompt injection risks in text-to-SQL',
            'LLMs for PySpark code generation',
            'Building AI-powered data quality agents',
            'Databricks Genie — natural language to Spark SQL',
          ]},
        ]
      },
    ]
  },
  {
    id: 'phase7',
    icon: '🗂️',
    label: 'Phase 7',
    name: 'Modern Data Stack & Advanced Topics',
    color: '#06b6d4',
    modules: [
      {
        id: 'mod27', num: 27,
        title: 'dbt (Data Build Tool)',
        sections: [
          { title: '27.1 dbt Fundamentals', topics: [
            'What is dbt? The T in ELT — transformations in the warehouse',
            'dbt Core vs dbt Cloud',
            'dbt project structure — `models/`, `tests/`, `seeds/`, `macros/`, `snapshots/`, `sources/`',
            '`dbt_project.yml` — project configuration',
            '`profiles.yml` — connection configuration',
          ]},
          { title: '27.2 dbt Models', topics: [
            'Models — SQL `SELECT` statements that dbt compiles and runs',
            'Materializations — `view`, `table`, `incremental`, `ephemeral`',
            'Incremental models — `is_incremental()`, `unique_key`, merge strategy',
            '`ref()` — referencing other models, building DAG',
            '`source()` — referencing raw source tables',
            'Model configurations — in `.yml` files or `{{ config(...) }}`',
          ]},
          { title: '27.3 dbt Testing & Documentation', topics: [
            'Generic tests — `unique`, `not_null`, `accepted_values`, `relationships`',
            'Singular tests — custom SQL test files',
            '`dbt test` — running tests',
            '`dbt docs generate` and `dbt docs serve` — auto-generated documentation',
            'Column descriptions in `.yml` schema files',
          ]},
          { title: '27.4 dbt Advanced', topics: [
            'Jinja templating in dbt — `{{ }}`, `{% %}`, `{{ config() }}`, `{{ this }}`',
            'Macros — reusable SQL snippets',
            'Packages — `packages.yml`, `dbt_utils`, `dbt_expectations`',
            'Snapshots — Type 2 SCD tracking',
            'Seeds — loading CSV files as tables',
            'Hooks — `pre-hook`, `post-hook`',
            'Exposures — documenting downstream BI dependencies',
          ]},
        ]
      },
      {
        id: 'mod28', num: 28,
        title: 'Apache Airflow',
        sections: [
          { title: '28.1 Airflow Fundamentals', topics: [
            'What is Airflow? Workflow orchestration platform',
            'DAG (Directed Acyclic Graph) — defining workflows as code',
            'Components — Scheduler, Webserver, Worker, Metadata Database, Message Broker',
            'DAG file structure — `default_args`, `schedule_interval`, tasks',
          ]},
          { title: '28.2 Core Concepts', topics: [
            'Operators — `PythonOperator`, `BashOperator`, `DummyOperator`, `EmailOperator`',
            'Provider packages — `airflow-providers-*` — cloud-specific operators',
            '`DatabricksRunNowOperator`, `DatabricksSubmitRunOperator`',
            '`AzureDataFactoryRunPipelineOperator`',
            'TaskFlow API — `@dag`, `@task` decorators (Airflow 2+)',
            'XComs — cross-task communication, push/pull',
            'Connections — storing credentials securely',
            'Variables — storing config values',
            'SensorOperators — `FileSensor`, `S3KeySensor`, `HttpSensor`',
            'Branching — `BranchPythonOperator`',
          ]},
          { title: '28.3 Scheduling & Execution', topics: [
            '`schedule_interval` — cron expressions, presets (`@daily`, `@hourly`, `@weekly`)',
            'Backfill — re-running historical DAG runs',
            '`catchup=True/False` — controlling backfill behavior',
            'Concurrency and parallelism settings',
            'Airflow on Kubernetes — KubernetesPodOperator, KEDA autoscaling',
            'Managed Airflow — AWS MWAA, GCP Cloud Composer, Astronomer',
          ]},
        ]
      },
      {
        id: 'mod29', num: 29,
        title: 'Apache Kafka (Streaming Fundamentals)',
        sections: [
          { title: '29.1 Kafka Concepts', topics: [
            'What is Kafka? Distributed event streaming platform',
            'Topics — named log of events, immutable append-only',
            'Partitions — parallelism unit, ordered within partition',
            'Offsets — position of message within partition',
            'Producers — publishing messages to topics',
            'Consumers — reading messages from topics',
            'Consumer Groups — load-balanced consumption',
            'Brokers — Kafka server instances',
            'ZooKeeper vs KRaft (Kafka Raft mode — ZooKeeper-less)',
          ]},
          { title: '29.2 Kafka in Data Engineering', topics: [
            'Event-driven architecture — producers and consumers decoupled',
            'Kafka Connect — source and sink connectors',
            'Kafka Streams — stream processing library',
            'Schema Registry — Avro/JSON schema management, schema evolution',
            'Exactly-once semantics — transaction API',
            'Azure Event Hubs — Kafka-compatible Azure managed service',
            'Confluent Cloud — managed Kafka',
          ]},
          { title: '29.3 Spark Structured Streaming with Kafka', topics: [
            'Reading from Kafka — `spark.readStream.format("kafka")`',
            'Kafka options — `subscribe`, `startingOffsets`, `maxOffsetsPerTrigger`',
            'Deserializing Avro/JSON payloads',
            'Writing to Kafka — `writeStream.format("kafka")`',
            'End-to-end exactly-once with Kafka + Delta',
          ]},
        ]
      },
      {
        id: 'mod30', num: 30,
        title: 'Cloud Cost Optimization & Architecture',
        sections: [
          { title: '30.1 Cost Optimization Strategies', topics: [
            'Spot/Preemptible instances — Databricks spot instances, cost savings',
            'Auto-termination on clusters — setting idle timeout',
            'Right-sizing clusters — matching cluster size to workload',
            'Job clusters vs all-purpose clusters — job clusters are cheaper',
            'Storage tiering — moving cold data to Cool/Archive tiers',
            'Compute vs storage cost tradeoffs in cloud',
            'ADF activity costs — data movement pricing',
            'Monitoring DBU consumption — Databricks cost reports',
            'Azure Cost Management + Budgets — setting alerts',
          ]},
          { title: '30.2 System Design for Data Platforms', topics: [
            'End-to-end data platform design components',
            'Ingestion layer — batch vs streaming, push vs pull',
            'Storage layer — raw zone, processed zone, serving zone',
            'Transformation layer — Spark, dbt, Flink',
            'Serving layer — data warehouse (Synapse, BigQuery, Snowflake), BI, ML',
            'Orchestration layer — ADF, Airflow, Prefect',
            'Security model — network isolation, identity management, encryption',
            'Scalability — horizontal scaling, partitioning, autoscaling',
            'High availability — multi-region, redundancy, DR strategy',
            'Data mesh concepts — domain-oriented ownership, data as a product',
            'Lambda architecture — batch + speed (streaming) layers',
            'Kappa architecture — streaming only, simplifies Lambda',
          ]},
        ]
      },
    ]
  },
  {
    id: 'phase8',
    icon: '🗂️',
    label: 'Phase 8',
    name: 'Capstone Project',
    color: '#e11d48',
    modules: [
      {
        id: 'mod31', num: 31,
        title: 'End-to-End Data Engineering Project',
        sections: [
          { title: '31.1 Architecture & Setup', topics: [
            'Define source systems — APIs, flat files, databases',
            'Design folder structure in ADLS — `raw/`, `bronze/`, `silver/`, `gold/`',
            'Provision resources — storage account, Databricks workspace, ADF instance',
            'Configure security — service principal, Key Vault, RBAC assignments',
            'Set up Git repo — branching strategy, repo structure',
          ]},
          { title: '31.2 Ingestion Layer (Bronze)', topics: [
            'ADF pipeline — Linked Services to source and ADLS',
            'Copy Activity — raw file landing in `raw/` with date partition',
            'Schema drift handling — dynamic schema mapping',
            'Notebook Activity — Databricks notebook triggered from ADF',
            'Auto Loader reading from `raw/` and writing to `bronze/` Delta table',
            'Parameterize pipeline — dynamic dates, file paths',
          ]},
          { title: '31.3 Transformation Layer (Silver)', topics: [
            'PySpark data cleaning — null handling, deduplication, type casting',
            'Business rule implementation — filtering invalid records',
            'Standardizing columns — naming conventions, date formats',
            'Writing to Silver Delta table — merge/append strategy',
            'Schema enforcement validation',
          ]},
          { title: '31.4 Aggregation Layer (Gold)', topics: [
            'Aggregating Silver data into business metrics',
            'KPI calculations — daily totals, rolling averages, rankings',
            'Fact and Dimension tables construction',
            'Star schema implementation in Delta',
            'Partitioning and Z-Ordering Gold tables for BI performance',
          ]},
          { title: '31.5 Orchestration & Automation', topics: [
            'ADF master pipeline — sequencing ingestion → bronze → silver → gold',
            'Schedule trigger — daily automated execution',
            'Error handling — retry logic, alerting on failure',
            'Passing parameters from ADF to Databricks notebooks',
            'Job monitoring setup',
          ]},
          { title: '31.6 Data Quality & Observability', topics: [
            'Data quality checks in Silver layer — null counts, row counts, duplicate checks',
            'Custom logging — writing quality metrics to a Delta table',
            'Alerting on quality threshold breach',
            'Pipeline observability dashboard — ADF monitor, Databricks job history',
          ]},
          { title: '31.7 Performance & Cost', topics: [
            'Optimize Delta tables — `OPTIMIZE` + `ZORDER BY`',
            'Cluster tuning — right-sized job clusters',
            'File format validation — Parquet column statistics',
            'Cost tracking — DBU usage, storage costs',
          ]},
          { title: '31.8 CI/CD & Documentation', topics: [
            'Git integration — Databricks Repos + ADF ARM templates',
            'Dev → Staging → Prod pipeline deployment',
            'README documentation — architecture diagram, setup instructions',
            'Data dictionary — column descriptions, data types, business definitions',
          ]},
        ]
      },
    ]
  },
];

// ============================
// STATE
// ============================
const STATE_KEY = 'dataeng_tracker_v2';
let checkState = {};

function loadState() {
  try {
    const s = localStorage.getItem(STATE_KEY);
    checkState = s ? JSON.parse(s) : {};
  } catch { checkState = {}; }
}

function saveState() {
  try { localStorage.setItem(STATE_KEY, JSON.stringify(checkState)); } catch {}
}

// ============================
// STATS
// ============================
function getAllTopics() {
  let topics = [];
  PHASES.forEach(p => p.modules.forEach(m => m.sections.forEach(sec => sec.topics.forEach(t => {
    topics.push({ phaseId: p.id, modId: m.id, topic: t });
  }))));
  return topics;
}

function getModuleStats(modId, sections) {
  let total = 0, done = 0;
  sections.forEach(sec => sec.topics.forEach(t => {
    total++;
    if (checkState[`${modId}::${t}`]) done++;
  }));
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function getPhaseStats(phase) {
  let total = 0, done = 0;
  phase.modules.forEach(m => {
    const s = getModuleStats(m.id, m.sections);
    total += s.total;
    done += s.done;
  });
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function getOverallStats() {
  let total = 0, done = 0;
  PHASES.forEach(p => {
    const s = getPhaseStats(p);
    total += s.total;
    done += s.done;
  });
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}

// ============================
// RENDER
// ============================
function inlineCode(text) {
  return text.replace(/`([^`]+)`/g, '<code>$1</code>');
}

function renderPhaseTabs() {
  const container = document.getElementById('phase-tabs');
  container.innerHTML = '';
  PHASES.forEach((p, i) => {
    const btn = document.createElement('button');
    btn.className = 'phase-tab-btn' + (i === 0 ? ' active' : '');
    btn.dataset.phaseId = p.id;
    btn.style.setProperty('--phase-color', p.color);
    btn.innerHTML = `${p.icon} ${p.label}: ${p.name}`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.phase-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const section = document.getElementById(p.id);
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      toggleSidebar(false);
    });
    container.appendChild(btn);
  });
  // Style active tab color
  updatePhaseTabColors();
}

function updatePhaseTabColors() {
  document.querySelectorAll('.phase-tab-btn').forEach(btn => {
    const p = PHASES.find(ph => ph.id === btn.dataset.phaseId);
    if (btn.classList.contains('active') && p) {
      btn.style.background = p.color + '22';
      btn.style.borderColor = p.color + '55';
      btn.style.color = p.color;
    } else {
      btn.style.background = '';
      btn.style.borderColor = '';
      btn.style.color = '';
    }
  });
}

function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  nav.innerHTML = '';
  PHASES.forEach(p => {
    const label = document.createElement('div');
    label.className = 'sidebar-phase-label';
    label.textContent = `${p.label}: ${p.name}`;
    label.style.color = p.color;
    nav.appendChild(label);
    p.modules.forEach(m => {
      const link = document.createElement('div');
      link.className = 'sidebar-link';
      link.dataset.modId = m.id;
      const stats = getModuleStats(m.id, m.sections);
      link.innerHTML = `<span class="mod-num">${m.num}</span><span>${m.title}</span><span style="margin-left:auto;font-size:0.72rem;color:var(--text-muted)">${stats.pct}%</span>`;
      link.addEventListener('click', () => {
        document.getElementById(m.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        toggleSidebar(false);
      });
      nav.appendChild(link);
    });
  });
}

function renderModuleProgressRing(modId, sections) {
  const { pct } = getModuleStats(modId, sections);
  const r = 16;
  const circ = 2 * Math.PI * r;
  const dash = circ - (pct / 100) * circ;
  const color = pct === 100 ? '#10b981' : pct > 50 ? '#6366f1' : '#8b9ab5';
  return `
    <div class="module-progress-ring" title="${pct}% complete">
      <svg width="40" height="40" viewBox="0 0 40 40">
        <circle class="ring-bg" cx="20" cy="20" r="${r}" fill="none" stroke-width="3.5"/>
        <circle class="ring-fill" cx="20" cy="20" r="${r}" fill="none" stroke-width="3.5"
          stroke="${color}" stroke-dasharray="${circ}" stroke-dashoffset="${dash}"/>
      </svg>
      <div class="ring-pct" style="color:${color}">${pct}%</div>
    </div>
  `;
}

function renderMainContent() {
  const container = document.getElementById('main-content');
  container.innerHTML = '';

  PHASES.forEach(phase => {
    const phaseStats = getPhaseStats(phase);
    const section = document.createElement('section');
    section.className = 'phase-section';
    section.id = phase.id;

    // Phase Header
    const ringCirc = 2 * Math.PI * 20;
    const ringDash = ringCirc - (phaseStats.pct / 100) * ringCirc;
    section.innerHTML = `
      <div class="phase-header">
        <div class="phase-icon" style="background:${phase.color}22;border:1.5px solid ${phase.color}44">
          ${phase.icon}
        </div>
        <div class="phase-info">
          <div class="phase-label" style="color:${phase.color}">${phase.label}</div>
          <div class="phase-name">${phase.name}</div>
          <div class="phase-module-count">${phase.modules.length} module${phase.modules.length>1?'s':''} · ${phaseStats.total} topics</div>
        </div>
        <div class="phase-progress-mini">
          <svg width="54" height="54" viewBox="0 0 54 54" style="transform:rotate(-90deg)">
            <circle cx="27" cy="27" r="20" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="4"/>
            <circle cx="27" cy="27" r="20" fill="none" stroke="${phase.color}" stroke-width="4"
              stroke-linecap="round"
              stroke-dasharray="${ringCirc}" stroke-dashoffset="${ringDash}"
              id="phase-ring-${phase.id}"/>
          </svg>
          <div style="position:absolute;font-size:0.72rem;font-weight:700;color:${phase.color};margin-left:-54px;width:54px;text-align:center;transform:translateY(0)">
          </div>
          <span class="phase-pct-label" id="phase-pct-${phase.id}" style="color:${phase.color}">${phaseStats.pct}%</span>
        </div>
      </div>
      <div class="modules-grid" id="grid-${phase.id}"></div>
    `;
    container.appendChild(section);

    const grid = document.getElementById(`grid-${phase.id}`);
    phase.modules.forEach(mod => {
      const card = document.createElement('div');
      card.className = 'module-card';
      card.id = mod.id;
      const modStats = getModuleStats(mod.id, mod.sections);

      card.innerHTML = `
        <div class="module-header" data-mod="${mod.id}">
          <div class="module-num-badge" style="background:${phase.color}22;color:${phase.color};border:1px solid ${phase.color}44">
            ${mod.num}
          </div>
          <div class="module-title-group">
            <div class="module-num-label" style="color:${phase.color}">MODULE ${mod.num}</div>
            <div class="module-title">${mod.title}</div>
          </div>
          <div class="module-meta">
            ${renderModuleProgressRing(mod.id, mod.sections)}
            <span class="collapse-arrow">▼</span>
          </div>
        </div>
        <div class="module-progress-bar-row">
          <div class="module-pb-track">
            <div class="module-pb-fill" id="pb-${mod.id}" style="width:${modStats.pct}%"></div>
          </div>
          <div class="module-pb-label" id="pbl-${mod.id}">${modStats.done}/${modStats.total}</div>
        </div>
        <div class="module-divider"></div>
        <div class="module-body">
          <div class="module-body-inner" id="body-${mod.id}">
            ${renderModuleBody(mod)}
          </div>
        </div>
      `;
      grid.appendChild(card);

      // Click to expand/collapse
      card.querySelector('.module-header').addEventListener('click', () => {
        card.classList.toggle('expanded');
      });
    });
  });
}

function renderModuleBody(mod) {
  return mod.sections.map(sec => `
    <div class="topic-section">
      <div class="topic-section-title">${sec.title}</div>
      <ul class="topic-list">
        ${sec.topics.map(t => {
          const key = `${mod.id}::${t}`;
          const checked = checkState[key] ? 'checked' : '';
          const done = checkState[key] ? 'done' : '';
          const safeId = btoa(encodeURIComponent(key)).replace(/[^a-zA-Z0-9]/g,'').slice(0,40);
          return `
            <li class="topic-item ${done}" data-key="${key}" id="item-${safeId}">
              <input type="checkbox" ${checked} data-key="${key}" id="chk-${safeId}" />
              <label class="topic-text" for="chk-${safeId}">${inlineCode(t)}</label>
            </li>
          `;
        }).join('')}
      </ul>
    </div>
  `).join('');
}

// ============================
// CHECKBOX HANDLER
// ============================
function attachCheckboxListeners() {
  document.getElementById('main-content').addEventListener('change', e => {
    if (e.target.type === 'checkbox') {
      const key = e.target.dataset.key;
      if (!key) return;
      checkState[key] = e.target.checked;
      saveState();
      // Update item class
      const item = e.target.closest('.topic-item');
      if (item) item.classList.toggle('done', e.target.checked);
      // Update stats
      updateAllStats();
      // Show toast
      if (e.target.checked) showToast(`✅ Marked as done!`);
    }
  });
}

function updateAllStats() {
  const overall = getOverallStats();
  // Hero
  document.getElementById('hero-overall-pct').textContent = overall.pct + '%';
  document.getElementById('hero-overall-bar').style.width = overall.pct + '%';
  document.getElementById('hero-completed').textContent = overall.done;
  document.getElementById('hero-total').textContent = overall.total;
  document.getElementById('nav-overall-pct').textContent = overall.pct + '%';

  PHASES.forEach(phase => {
    const ps = getPhaseStats(phase);
    const el = document.getElementById(`phase-pct-${phase.id}`);
    if (el) el.textContent = ps.pct + '%';
    const ring = document.getElementById(`phase-ring-${phase.id}`);
    if (ring) {
      const ringCirc = 2 * Math.PI * 20;
      ring.setAttribute('stroke-dashoffset', ringCirc - (ps.pct / 100) * ringCirc);
    }

    phase.modules.forEach(mod => {
      const ms = getModuleStats(mod.id, mod.sections);
      // Progress bar
      const pb = document.getElementById(`pb-${mod.id}`);
      if (pb) pb.style.width = ms.pct + '%';
      const pbl = document.getElementById(`pbl-${mod.id}`);
      if (pbl) pbl.textContent = `${ms.done}/${ms.total}`;
      // Ring
      const ring = document.querySelector(`#${mod.id} .ring-fill`);
      if (ring) {
        const r = 16;
        const circ = 2 * Math.PI * r;
        const dash = circ - (ms.pct / 100) * circ;
        const color = ms.pct === 100 ? '#10b981' : ms.pct > 50 ? '#6366f1' : '#8b9ab5';
        ring.setAttribute('stroke-dashoffset', dash);
        ring.setAttribute('stroke', color);
      }
      const ringPct = document.querySelector(`#${mod.id} .ring-pct`);
      if (ringPct) {
        const color = ms.pct === 100 ? '#10b981' : ms.pct > 50 ? '#6366f1' : '#8b9ab5';
        ringPct.textContent = ms.pct + '%';
        ringPct.style.color = color;
      }
    });
  });

  // Sidebar progress
  document.querySelectorAll('.sidebar-link[data-mod-id]').forEach(link => {
    const modId = link.dataset.modId;
    // find module
    let mod;
    PHASES.forEach(p => p.modules.forEach(m => { if (m.id === modId) mod = m; }));
    if (mod) {
      const ms = getModuleStats(mod.id, mod.sections);
      const pctEl = link.querySelector('span:last-child');
      if (pctEl) pctEl.textContent = ms.pct + '%';
    }
  });
}

// ============================
// SEARCH
// ============================
function initSearch() {
  const input = document.getElementById('search-input');
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      document.querySelectorAll('.module-card').forEach(c => c.classList.remove('search-hidden'));
      document.querySelectorAll('.phase-section').forEach(s => s.style.display = '');
      return;
    }
    PHASES.forEach(phase => {
      let phaseVisible = false;
      phase.modules.forEach(mod => {
        const card = document.getElementById(mod.id);
        const match =
          mod.title.toLowerCase().includes(q) ||
          mod.sections.some(sec => sec.title.toLowerCase().includes(q) || sec.topics.some(t => t.toLowerCase().includes(q)));
        if (card) {
          card.classList.toggle('search-hidden', !match);
          if (match) { phaseVisible = true; card.classList.add('expanded'); }
        }
      });
      const sec = document.getElementById(phase.id);
      if (sec) sec.style.display = phaseVisible ? '' : 'none';
    });
  });
}

// ============================
// EXPAND ALL
// ============================
let allExpanded = false;
document.getElementById('expand-all-btn').addEventListener('click', () => {
  allExpanded = !allExpanded;
  document.querySelectorAll('.module-card').forEach(c => c.classList.toggle('expanded', allExpanded));
  document.getElementById('expand-all-btn').textContent = allExpanded ? 'Collapse All' : 'Expand All';
});

// ============================
// SIDEBAR TOGGLE
// ============================
function toggleSidebar(force) {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const isOpen = typeof force === 'boolean' ? force : !sidebar.classList.contains('open');
  sidebar.classList.toggle('open', isOpen);
  overlay.classList.toggle('show', isOpen);
}
document.getElementById('hamburger').addEventListener('click', () => toggleSidebar());
document.getElementById('close-sidebar').addEventListener('click', () => toggleSidebar(false));
document.getElementById('sidebar-overlay').addEventListener('click', () => toggleSidebar(false));

// ============================
// QUICK REF TABS
// ============================
function initQRTabs() {
  document.querySelectorAll('.qr-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.qr-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.qr-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });
}

// ============================
// BACK TO TOP
// ============================
const bttBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  bttBtn.classList.toggle('show', window.scrollY > 400);
  // Navbar scroll effect
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  // Phase tab highlight
  updateActivePhaseTab();
});
bttBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

function updateActivePhaseTab() {
  const scrollY = window.scrollY + 200;
  let activeId = null;
  PHASES.forEach(p => {
    const el = document.getElementById(p.id);
    if (el && el.offsetTop <= scrollY) activeId = p.id;
  });
  if (activeId) {
    document.querySelectorAll('.phase-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.phaseId === activeId);
    });
    updatePhaseTabColors();
  }
}

// ============================
// TOAST
// ============================
let toastContainer;
function showToast(msg) {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  toastContainer.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.4s'; setTimeout(() => toast.remove(), 400); }, 1800);
}

// ============================
// KEYBOARD SHORTCUTS
// ============================
document.addEventListener('keydown', e => {
  if (e.key === '/' && !e.target.matches('input,textarea')) {
    e.preventDefault();
    toggleSidebar(true);
    setTimeout(() => document.getElementById('search-input').focus(), 100);
  }
  if (e.key === 'Escape') toggleSidebar(false);
});

// ============================
// INIT
// ============================
loadState();
renderPhaseTabs();
renderSidebar();
renderMainContent();
attachCheckboxListeners();
initSearch();
initQRTabs();
updateAllStats();

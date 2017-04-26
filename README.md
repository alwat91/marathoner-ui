# Marathoner
This is a lightweight app for keeping track of runs. Backend repo: https://github.com/alwat91/marathoner

## ERD

### Entities

#### User

```
id: Integer,
email: String,
password_digest: String,
has_many runs
```

#### Run

```
id: Integer,
mileage: Float,
beginning_time: String,
end_time: String,
duration: String
belongs_to user
```

DROP TABLE IF EXISTS reflections;

CREATE TABLE reflections (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    image_path TEXT
);
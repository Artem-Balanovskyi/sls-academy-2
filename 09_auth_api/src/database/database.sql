create EXTENSION if not exists "uuid-ossp";

create TABLE users (
    id uuid PRIMARY KEY uuid_generate_v4(),
    email VARCHAR(255) not null,
    password VARCHAR(255) not null
);
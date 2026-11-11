CREATE TABLE businesses (id BIGSERIAL PRIMARY KEY, name TEXT NOT NULL, city TEXT NOT NULL);
CREATE TABLE reviews (id BIGSERIAL PRIMARY KEY, business_id BIGINT NOT NULL REFERENCES businesses(id), rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5), created_at TIMESTAMPTZ NOT NULL DEFAULT NOW());
CREATE INDEX reviews_business_created_idx ON reviews (business_id, created_at DESC);
-- Explore EXPLAIN ANALYZE on review aggregates as the dataset grows.

-- Create highlighted_data table schema
CREATE TABLE highlighted_data (
  date_occured DATE,
  time_occured VARCHAR(50),
  city_occured VARCHAR(500),
  state_occured VARCHAR (50),
  country_occured VARCHAR(50),
  shape VARCHAR(50),
  summary VARCHAR(500)
);

-- Add values from CSV file to highlighted_data table
COPY highlighted_data (date_occured, time_occured, city_occured, state_occured, country_occured, shape, summary)
FROM 'C:\Users\16025\VizualizationStuff\UFOProject\UFO_Sightings_Analysis\Resources\highlighted_data.csv'
DELIMITER ','
CSV HEADER;

-- Show table
SELECT * FROM highlighted_data;
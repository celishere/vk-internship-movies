#!/bin/bash

cd ..

if [[ ! -d "src" ]]; then
  exit 1
fi

find src -type f -name "*.less" | while read -r file; do
  new_name="${file%.less}.scss"

  mv "$file" "$new_name"
  echo "$file -> $new_name"
done

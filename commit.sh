#!/bin/bash

git add .;

git commit -am '$1: $2';

git push;

echo 'code commited and pushed';

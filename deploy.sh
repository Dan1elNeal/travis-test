#!/bin/bash

now rm the-best-messenger -y --token $NOW_TOKEN
npm run deploy
sleep 1m
npm run alias

import axios from "axios";
import firebase from "./firebase";

import { path_server, request_delay } from "../Constants";
const api_token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : "";
/* 
const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
*/
export const api = axios.create({
  baseURL: path_server,
  timeout: request_delay,
  headers: {
    token: api_token,
  },
});

export const noAuthAPI = axios.create({
  baseURL: path_server,
  timeout: request_delay,
});

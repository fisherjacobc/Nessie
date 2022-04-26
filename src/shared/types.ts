export enum logType {
  info = "info",
  success = "success",
  warning = "warning",
  error = "error",
}

export enum requestAction {
  LOG = "LOG",
  PING = "PING",
  NONE = "NONE",
  STOP = "STOP",
  PICKUP_BALL = "PICKUP_BALL",
  LAUNCH_BALL = "LAUNCH_BALL",
}

export enum resposneAction {
  LOG = "LOG",
  PONG = "PONG",
  NONE = "NONE",
}

export interface baseRequestData {
  action: requestAction;
  [key: string]: any;
}

export interface logRequestData extends baseRequestData {
  type: logType;
  message: string;
  context: string;
}

export interface baseResponseData {
  action: resposneAction;
  [key: string]: any;
}

export interface logResponseData extends baseResponseData {
  type: logType;
  message: string;
  context: string;
}

export interface ControlsInterface {
  roll: number;
  pitch: number;
  yaw: number;
  view: number;
  throttle: number;
  buttons: number[];
}

export interface LogitechControlsInterface extends ControlsInterface {
  buttons: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
}
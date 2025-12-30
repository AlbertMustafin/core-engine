// types.ts
export interface EngineConfig {
  /**
   * The engine's name
   */
  name: string;
  /**
   * The engine's version
   */
  version: string;
}

export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

export interface Logger {
  debug(message: string): void;
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
}

export interface Engine {
  config: EngineConfig;
  logger: Logger;
  start(): void;
  stop(): void;
} 

export class EngineError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'EngineError';
  }
}
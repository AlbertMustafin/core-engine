import logging
import os
from datetime import datetime

def setup_logging(log_level=logging.INFO, log_file='core-engine.log'):
    logging.basicConfig(
        format='%(asctime)s [%(levelname)s] %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S',
        level=log_level,
        handlers=[
            logging.FileHandler(log_file),
            logging.StreamHandler()
        ]
    )

def get_current_timestamp():
    return datetime.now().strftime('%Y-%m-%d %H:%M:%S')

def get_project_root() -> str:
    return os.path.dirname(os.path.abspath(__file__))

def is_file_exists(file_path: str) -> bool:
    return os.path.isfile(file_path)

def create_directory(dir_path: str) -> None:
    if not os.path.exists(dir_path):
        os.makedirs(dir_path)

def remove_file(file_path: str) -> None:
    if is_file_exists(file_path):
        os.remove(file_path)

class Timer:
    def __init__(self):
        self.start_time = None

    def start(self):
        self.start_time = datetime.now()

    def stop(self):
        if self.start_time is not None:
            return (datetime.now() - self.start_time).total_seconds()
        else:
            raise ValueError("Timer has not been started")
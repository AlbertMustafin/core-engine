import logging
import os
from typing import Any, Dict, List

# Set up logging configuration
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

def get_environment_variables() -> Dict[str, str]:
    return dict(os.environ)

def load_config(file_path: str) -> Dict[str, Any]:
    import json
    with open(file_path, 'r') as file:
        return json.load(file)

def filter_list(input_list: List[Any], predicate) -> List[Any]:
    return [item for item in input_list if predicate(item)]

def merge_dicts(dict1: Dict[str, Any], dict2: Dict[str, Any]) -> Dict[str, Any]:
    result = dict1.copy()
    result.update(dict2)
    return result

def write_to_file(file_path: str, content: str) -> None:
    with open(file_path, 'w') as file:
        file.write(content)

class Utils:
    @staticmethod
    def is_empty(string: str) -> bool:
        return not string.strip()

    @staticmethod
    def get_file_extension(file_path: str) -> str:
        return os.path.splitext(file_path)[1]

    @staticmethod
    def create_directory(dir_path: str) -> None:
        if not os.path.exists(dir_path):
            os.makedirs(dir_path)
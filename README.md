

# PlantVillage Classification Model

This repository contains code for training a plant disease classification model using TensorFlow and deploying it using CI/CD pipelines.

## Dataset

The model is trained on the [PlantVillage dataset](https://www.kaggle.com/emmarex/plantdisease).

## Getting Started

### Prerequisites

Make sure you have the following dependencies installed:

- Python 3.x
- TensorFlow
- Matplotlib
- MLflow

Install dependencies:

pip install -r requirements.txt

### Training the Model

1. Download the dataset and place it in the specified dataset_path.
2. Run the training script:

python train_model.py

## CI/CD Pipelines

The repository includes GitHub Actions workflows for continuous integration and deployment.

- **Continuous Integration (CI):** Automatically triggered on every push to the main branch. Checks for code quality, tests, and dependencies.

- **Continuous Deployment (CD):** Automatically triggered on successful CI. Deploys the model using MLflow and creates a release.
## Model Evaluation

Evaluate the model's performance on the test set:

### Deployment (deployment.txt)
python deploy_local.py


## Contributing
Feel free to open issues or pull requests for improvements. Contributions are welcome!

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

![image](https://github.com/Pradhyumn1/plant_dis/assets/73153956/bdcdf604-77d2-4cee-b998-4b52e60c7c8a)

![image](https://github.com/Pradhyumn1/plant_dis/assets/73153956/0ec63447-a01f-447f-bd80-f8ec7113f8b0)



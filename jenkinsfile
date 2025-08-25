pipeline {
    agent any

    environment {
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/RahulPashikanti22/paradigm.git', branch: 'main'
            }
        }

        stage('Build Images') {
            steps {
                script {
                    sh "docker-compose -f ${COMPOSE_FILE} build"
                }
            }
        }

        stage('Start Services') {
            steps {
                script {
                    sh "docker-compose -f ${COMPOSE_FILE} up -d"
                }
            }
        }
    }

    post {
        always {
            script {
                echo "Pipeline execution finished."
            }
        }
    }
}

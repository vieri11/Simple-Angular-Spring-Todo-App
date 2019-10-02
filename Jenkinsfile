pipeline {
    agent any
    stages {
        stage('Test Build') {
            steps{
                sh 'echo "Hello World"'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -la
                '''
            }
        }
    }
}

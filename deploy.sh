echo "Remove previous build..."
rm -rf ./gymcat

echo "Build app..."

pnpm exec vite build --force

echo "Deploying app..."
mv dist gymcat
scp -r gymcat root@191.96.53.225:/var/www/html/

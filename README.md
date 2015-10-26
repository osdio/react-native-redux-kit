# react-native-redux-kit

> A start kit for **react-native + redux** project.

# How to start it?

```
git clone https://github.com/soliury/react-native-redux-kit.git

```

Install the package:

```
npm i

```

This project use **gulp** as a dev control tool. So make sure you have install the **gulp**.

# Useful script

### npm start

This is equal to `gulp start`, it will replace the the bundle url in `AppDelegate.m`. It will auto find the local ip of your computer and fill it to the `AppDelegate.m`.

If you want to change the `port` of bundle url, you can change the `port` in `gulpFile.coffee`:

```
port = 8080

```

### gulp package

Just run react-native package script, This won't change the bundle url in `AppDelegate.m`.

# Files struct

TBD






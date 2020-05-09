# React Native White Label Module Based Application Generator 

### Credits

Based on a tutorial by <a href="https://medium.com/welld-tech/one-app-to-rule-them-all-building-a-white-label-application-with-react-native-9d30f69eb3ae">Amedo Zucchetti</a>

### Running this code
* Clone the repository
* Run `cd react-native-white-label/whitelabel` to navigate to the project repository
* Run `npm i` to install the node dependencies

###### IOS
* Make sure you have XCode, XCode Developer tools and a simulator set up
* Run `npm run install:ios`
* Run `npm run ios` to launch the application on your IOS simulator (this might take a while)

###### Android
* Make sure you have Android Studio, and an android emulator installed
* Make sure you have followed the <a href="https://reactnative.dev/docs/environment-setup">React Native environment setup guide</a>
* Run `npm run install:keygen` and answer the questions when prompted
* Run `npm run android` to launch the application on your Android Emulator

### White Label Configuration

The white-label configuration script allows to configure the `whitelabel`
project to use a specific combination of modules and a specific theme, without
directly changing the source code. It can be run from the root directory with

```
./wl-configure.sh -a whitelabel -m Foo,Baz -t solarized-dark
```

It supports the following flags
* `a`: The name of the project to configure. `whitelabel` will configure the
`whitelabel` directory. Other names will configure `app-<name>` projects; for
instance, `-a test` will configure project `app-test`.
* `m`: List of comma-separated modules to be used. These modules must be present
in the `modules` directory. The order provided is the order with which modules
will be exported, so `-m Foo,Bar` is different from `-m Bar,Foo`.
* `t`: Theme to use in the app. It must be one present in the `theme` directory.

### White-label generation

The white-label generation allows to generate projects (new directories) based
on `whitelabel`, with a particular configuration, display name and bundle id.
This allows to install on the same device multiple applications originating from
the `whitelabel` one.

The generation can be done with
```
./wl-generate.sh -a test -d "Test" -b com.test -m Baz,Bar,Foo -t solarized-light
```

and will procude a new directory (or override the existing) `app-<name>`. In our
example, it will generate directory `app-test`. The script supports the
following flags
* `a`: Name of the project to generate for `-a name`, the project `app-name`
will be created. It cannot be `whitelabel`.
* `d`: Display name for the application, will be visible under the app icon on
the device.
* `b`: Bundle identifier for the app. It must consist of dot-separated
alpha-numeric characters. It should be unique for every application and it
should not be `com.whitelabel` (the default for the `whitelabel` project), or
two app may clash.
* `m`: List of comma-separated modules to be used. These modules must be present
in the `modules` directory. The order provided is the order with which modules
will be exported, so `-m Foo,Bar` is different from `-m Bar,Foo`.
* `t`: Theme to use in the app. It must be one present in the `theme` directory.
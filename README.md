# A small CLI script that removes Vite in favour of Laravel Mix

This project provides a `restore-mix` command that will remove all Vite related configuration from a fresh Laravel application and make the necessary changes for Laravel Mix.

## Installation

You can install this package globally using Composer:

```sh
composer global require ryangjchandler/laravel-restore-mix
```

## Usage

This package registers a global `restore-mix` command.

> Ensure you have Composer's `bin` directory in your `PATH`.

You can run the command inside of a fresh Laravel application and go through the steps to install Laravel Mix.

```sh
restore-mix
```
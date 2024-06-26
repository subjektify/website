---
sidebar_position: 5
---

# Subjektify Errors

This section contains a list of all the possible errors you may encounter when using Subjektify and an explanation of each of them.

## General Errors

### SGE001: You are not in a Subjektify namespace

#### Problem

You are trying to run `subjektify` outside of a Subjektify namespace.

#### Solution

You can learn how to use Subjektify by reading the [Getting Started guide](/docs/learn/start).

### SGE002: Namespace already exists

#### Problem

You are trying to run `subjektify init` in a directory that already contains a `subjektify.config.(js|ts)` file.

#### Solution

You can learn how to use Subjektify by reading the [Getting Started guide](/docs/learn/start).

### SGE003: Subjektify's context is not created

#### Problem

There was a code path that attempted to use Subjektify before it has been initialized. This is a bug.

#### Solution

Please [report it](https://github.com/subjektify/subjektify/issues/new) to help us improve Subjektify.

### SGE004: Subjektify's context is already created

#### Problem

There was a code path that attempted to initialize Subjektify twice. This is a bug.

#### Solution

Please [report it](https://github.com/subjektify/subjektify/issues/new) to help us improve Subjektify.

### SGE005: Subjektify's environment is already created

#### Problem

There was a code path that attempted to initialize Subjektify's runtime environment twice. This is a bug.

#### Solution

Please [report it](https://github.com/subjektify/subjektify/issues/new) to help us improve Subjektify.

## Task Errors

### STE001: Task not found

#### Problem

The task you are trying to run does not exist.

#### Solution


### STE002: A task action was run without being set

#### Problem

A task action was attempted to be run, but no action has been set for this task.

#### Solution


## Config Errors

### SCE001: Error loading config file

#### Problem

An error occurred while attempting to load the `subjektify.config.(js|ts)` file.

#### Solution


### SCE002: No config file found

#### Problem

No `subjektify.config.(js|ts)` file was found in the current directory.

#### Solution


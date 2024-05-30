---
sidebar_position: 3
---

# Subjektify Errors

This section contains a list of all the possible errors you may encounter when using Subjektify and an explanation of each of them.

## General Errors

### SGE001: You are not in a Subjektify namespace

#### Problem

You are trying to run `subjektify` outside of a Subjektify namespace.

#### Solution

You can learn how to use Subjektify by reading the [Getting Started guide](/docs/learn/start)

### SGE002: Namespace already exists

#### Problem

You are trying to run `subjektify init` in a directory that already contains a subjektify.config.(js|ts) file.

#### Solution

You can learn how to use Subjektify by reading the [Getting Started guide](/docs/learn/start)

### SGE003: Subjektify's context is already created

#### Problem

There was a code path that attempted to initialize subjektify twice. This is a bug.

#### Solution

Please [report it](https://github.com/subjektify/subjektify/issues/new) to help us improve Subjektify

/*
 * Rakuten React Starter Kit ES6
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// @flow

import { createStore } from "redux";
import { reduceApp } from "domain/store/reduce/main";

export const store = createStore(reduceApp);

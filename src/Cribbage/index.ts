/* INDEX FILE

This file, from a module perspective, behaves as the duck file form the original proposal.
It exports as default the reducer function of the duck.
It exports as named export the selectors and the operations.
Optionally it exports the actions and types if they are needed in other ducks.

Cribbed from https://github.com/alexnm/re-ducks

*/

import reducer from "./reducer";

import * as duckSelectors from "./selectors";
import * as duckOperations from "./operations";
import * as duckActions from "./actions";
import * as duckType from "./model";

export {
    duckSelectors,
    duckOperations,
    duckActions,
    duckType
};

export default reducer;
import * as customerActions from './customer.actions';

import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Customer } from '../customer.model';
import * as fromRoot from '../../../state/app.state';

export interface CustomerState extends EntityState<Customer> {
    selectedCustomerId: number | null,
    loading: boolean,
    loaded: boolean,
    error: string
}

export interface AppState extends fromRoot.AppState {
    customers: CustomerState,
}

export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<Customer>();

export const defaultCustomer: CustomerState = {
    ids: [],
    entities: {},
    selectedCustomerId: null,
    loading: false,
    loaded: false,
    error: ""
}

export const initialState = customerAdapter.getInitialState(defaultCustomer);

export function customerReducer(
    state = initialState,
    action: customerActions.extendedAction
): CustomerState {
    switch (action.type) {
        // LOAD CUSTOMERS ACTIONS
        case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS: {
            return customerAdapter.addMany(action.payload, {
                ...state,
                loading: false,
                loaded: true
            })
        }
        case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            }
        }

        // LOAD SINGLE CUSTOMER ACTIONS
        case customerActions.CustomerActionTypes.LOAD_CUSTOMER_SUCCESS: {
            return customerAdapter.addOne(action.payload, {
                ...state,
                selectedCustomerId: action.payload.id
            })
        }
        case customerActions.CustomerActionTypes.LOAD_CUSTOMER_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }

        // CREATE CUSTOMER ACTIONS
        case customerActions.CustomerActionTypes.CREATE_CUSTOMER_SUCCESS: {
            return customerAdapter.addOne(action.payload, state);
        }
        case customerActions.CustomerActionTypes.CREATE_CUSTOMER_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }

        // UPDATE CUSTOMER ACTIONS
        case customerActions.CustomerActionTypes.UPDATE_CUSTOMER_SUCCESS: {
            return customerAdapter.updateOne(action.payload, state);
        }
        case customerActions.CustomerActionTypes.UPDATE_CUSTOMER_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }

        // DELETE CUSTOMERS ACTIONS
        case customerActions.CustomerActionTypes.DELETE_CUSTOMER_SUCCESS: {
            return customerAdapter.removeOne(action.payload, state);
        }
        case customerActions.CustomerActionTypes.DELETE_CUSTOMER_FAIL: {
            return {
                ...state,
                error: action.payload
            }
        }

        default: {
            return state;
        }
    }
}


const getCustomerFeatureState = createFeatureSelector<CustomerState>(
    "customers"
)

export const getCustomers = createSelector(getCustomerFeatureState,
    customerAdapter.getSelectors().selectAll
)

export const getCustomersLoading = createSelector(getCustomerFeatureState,
    (state: CustomerState) => state.loading
)

export const getCustomersLoaded = createSelector(getCustomerFeatureState,
    (state: CustomerState) => state.loaded
)

export const getError = createSelector(getCustomerFeatureState,
    (state: CustomerState) => state.error
)

// SELECTORS FOR LOADING SELCTOR CUSTOMER IN EDIT COMPONENT
export const getCurrentCustomerId = createSelector(
    getCustomerFeatureState,
    (state: CustomerState) => state.selectedCustomerId
)

export const getCurrentCustomer = createSelector(
    getCustomerFeatureState,
    getCurrentCustomerId,
    state => state.selectedCustomerId !== null ? state.entities[state.selectedCustomerId] : null
)
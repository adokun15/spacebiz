import { createSlice } from "@reduxjs/toolkit";

export const ModalSlice = createSlice({
  initialState: {
    modal: {
      DashboardSideBar: false,
      FindRoommatePopOver: false,
      SingleChatPopOver: false,
      EditPreferencePopOver: { isOpened: false, mode: null, prev: null },
      EditProfilePopOver: { isOpened: false, mode: null, prev: null },
    },
    isLoading: null,
    isError: null,
  },
  name: "modal",

  reducers: {
    toggleFindRoommatePopover(state) {
      state.modal.FindRoommatePopOver = !state.modal.FindRoommatePopOver;
    },
    toggleDashBoardSideBar(state) {
      state.modal.DashboardSideBar = !state.modal.DashboardSideBar;
    },
    toggleSelectItemPopOver(state, action) {
      state.modal.SelectItemPopOver.isOpened =
        !state.modal.SelectItemPopOver.isOpened;

      if (state.modal.SelectItemPopOver.isOpened) {
        //singleInput --- an array of option
        state.modal.SelectItemPopOver.items = action.payload;
      } else {
        state.modal.SelectItemPopOver.items = [];
      }
    },

    addSingleItemtoSelect(state, action) {
      //iNCREMENT TO SINGLE LIST

      const existingFormSelectIndex =
        state.modal.SelectItemPopOver.formSelects.findIndex(
          (item) => item.inputName === action.payload.inputName
        );

      const existingFormSelect =
        state.modal.SelectItemPopOver.formSelects[existingFormSelectIndex];

      if (existingFormSelect) {
        const FormSelect = {
          ...existingFormSelect,
          result: {
            name: action.payload.result.name,
            value: action.payload.result.value,
          },
        };

        state.modal.SelectItemPopOver.formSelects[existingFormSelectIndex] =
          FormSelect;
      } else {
        state.modal.SelectItemPopOver.formSelects =
          state.modal.SelectItemPopOver.formSelects.concat(action.payload);
      }
    },
    clearSelect(state) {
      state.modal.SelectItemPopOver.formSelects = [];
      state.modal.SelectItemPopOver.selectedItem = null;
    },
    toggleSingleChatPopOver(state) {
      state.modal.SingleChatPopOver = !state.modal.SingleChatPopOver;
    },
    toggleEditPreferencePopOver(state, action) {
      // EditPreferencePopOver
      state.modal.EditPreferencePopOver.isOpened =
        !state.modal.EditPreferencePopOver.isOpened;
      state.modal.EditPreferencePopOver.mode = action.payload?.mode || null;
      state.modal.EditPreferencePopOver.prev = action.payload?.prev || null;
    },
    toggleEditProfilePopOver(state, action) {
      //Toggle visibility
      state.modal.EditProfilePopOver.isOpened =
        !state.modal.EditProfilePopOver.isOpened;
      //Provide modal
      state.modal.EditProfilePopOver.mode = action.payload?.mode || undefined;
      state.modal.EditProfilePopOver.prev = action.payload?.prev || undefined;
    },
  },
});

export const ModalAction = ModalSlice.actions;

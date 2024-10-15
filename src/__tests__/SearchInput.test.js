import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import SearchInput from "../components/SearchInput";
import App from "../App";

describe('Search Input', () => {

    it('all search input components rendered in App component of UI' , () => {
        render(<App />);
        const searchInpContainer = screen.getByTestId('search-input-container');
        const searchInp = screen.getByTestId('search-input');
        const searchInpBtn = screen.getByTestId('search-input-button');
        expect(searchInp).toBeInTheDocument()
        expect(searchInpContainer).toBeInTheDocument()
        expect(searchInpBtn).toBeInTheDocument()
    })

    let handleSetValueMock, handleOnSearchMock;


    beforeEach(() => {
       handleSetValueMock = jest.fn();
       handleOnSearchMock = jest.fn();
    })

    it('search input is rendered on UI',  () => {
      render(<SearchInput setValue={handleSetValueMock} value="" onSearch={handleOnSearchMock} />)
      const input = screen.getByTestId('search-input');
      expect(input).toBeInTheDocument()
    })

    // it('initail input width is 0', () => {
    //   render(<SearchInput setValue={handleSetValueMock} value="" onSearch={handleOnSearchMock} />)
    //   const input = screen.getByTestId('search-input');
    //   expect(input).toHaveClass('search-input');
    // })

    it('input expands on focus', async () => {
      render(<SearchInput setValue={handleSetValueMock} value="" onSearch={handleOnSearchMock} />)
      const input = screen.getByTestId('search-input');
      fireEvent.focus(input)
      await waitFor(() => {
         expect(input).toHaveClass('expanded')
      })

    })

    it('search button makes input focus when input is empty', () => {
       render(<SearchInput setValue={handleSetValueMock} value="" onSearch={handleOnSearchMock} />);
       const btn = screen.getByTestId('search-input-button');
       const inp = screen.getByTestId('search-input');
       fireEvent.click(btn);
       expect(inp).toHaveFocus()
    })

    it('calls setValue prop with input value', () => {
      render(<SearchInput setValue={handleSetValueMock} value="" onSearch={handleOnSearchMock} />);
      const inp = screen.getByTestId('search-input');
      fireEvent.change(inp, {target : {value : 'test input'}});
      expect(handleSetValueMock).toHaveBeenCalledWith('test input')
    })

  
})
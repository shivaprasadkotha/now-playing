import React, {act} from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import App from "../App"
import moviesList from "../data/movies";

describe("Calcuate the sum",() => {
      it("returns sum of 1, 2 to be 3", () => {
           expect(2+1).toBe(3)
      })
})

describe("Movie List", () => {
      it("page header Now Playing is rendered on DOM", () => {
            render(<App />) 
           const titleElement = screen.getByTestId("nowShowingTitle").textContent;
           expect(titleElement).toBe("Now Showing")
      })

      it('renders movies list', () => {
           render(<App />)
           const movieItems = screen.getByTestId('movie-list')
           expect(movieItems).toBeInTheDocument()
     })   

      it('check for movie list and correct movie poster and title rendered in the list', () => {
           render(<App />)
           moviesList.forEach((item,) => {
                const movie = screen.getByTestId(`movie-${item.id}`)
                const poster = screen.getByTestId(`movie-poster-${item.id}`)
                const title = screen.getByTestId(`movie-title-${item.id}`)

                expect(movie).toBeInTheDocument()
                expect(poster).toBeInTheDocument()
                expect(title).toBeInTheDocument();

                expect(poster.src).toContain(item.image)
                expect(title.textContent).toBe(item.name)

           })
      })
})

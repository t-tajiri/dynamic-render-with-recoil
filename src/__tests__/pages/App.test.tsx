import React from 'react';
import { render } from '@testing-library/react';
import { App } from '../../pages/App';

describe("App", () => {

  beforeAll(() => {
    window.layout = { title: "\u30cf\u30ed\u30fc\u30ef\u30fc\u30eb\u30c9\uff01",
                      tables: {
                        grid1: {
                          table: [
                              [ { label: "\u306a\u307e\u3048", type: "t-tajiri" } ],
                              [ { label: "LV", type: "26" } ]
                            ]
                        },
                        grid2: {
                          table: [
                            [ { label: "name", type: "input" } ],
                            [ { label: "name", type: "input" } ]
                          ]
                        }
                      },
                      tableTypes: { grid1: "profile", grid2: "fixed" }
                    };
  });

  test('renders learn react link', () => {
    render(<App />);
  });
});

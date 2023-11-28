import React from "react"
import Staff from "../../img/contributor.png"

const ContributorsMobile = () => {
  const contributorscard = [
    {
      id: 1,
      image: "src/img/contributor.png",
      thanksMessage: "Thank you sxa for making",
      content: "2 contribution (s) to STF",
      style: {
        marginTop: "80px",
        width: "305px",
        marginLeft: "80px",
      },
    },
    {
      id: 2,
      image: "src/img/contributor.png",
      thanksMessage: "Thank you sxa for making",
      content: "2 contribution (s) to STF",
      style: {
        height: "fit-content",
        width: "305px",
        marginBottom: "80px",
      },
    },

    {
      id: 3,
      image: "src/img/contributor.png",
      thanksMessage: "Thank you sxa for making",
      content: "2 contribution (s) to STF",
      style: {
        height: "fit-content",
        marginTop: "130px",
        marginRight: "-140px",
      },
    },
    {
      id: 4,
      image: "src/img/contributor.png",
      thanksMessage: "Thank you sxa for making",
      content: "2 contribution (s) to STF",
      style: {
        height: "fit-content",
      },
    },
  ]
  const set1 = contributorscard.slice(0, 2)
  const set2 = contributorscard.slice(2, 4)
  return (
    <>
      <div className=" xl:px-0 lg:px-8 px-0 w-full overflow-hidden flex flex-col items-center justify-center max-w-[1440px] mx-auto md:hidden py-[32px] contributors">
        {/* ==========================================SET-1=============================================== */}
        <div className="flex w-fit space-x-4 sm:space-x-[210px] md:mx-auto justify-between items-end xl:ml-[461px] overflow-hidden relative mb-10">
          {set1.map((staff, contributionsCount) => (
            <div
              key={contributionsCount}
              className="flex items-center justify-center p-4 space-x-4 w-[305px] newscard"
              style={staff.style}
            >
              <img
                src={Staff}
                className="w-[72px] h-[72px] !mb-0"
                alt="scroll-divider"
              />
              <div className="text-white text-base font-normal leading-6">
                <p
                  className="!my-0"
                  dangerouslySetInnerHTML={{
                    __html: staff.thanksMessage.replace(
                      /sxa/,
                      '<span class="border-b border-white">sxa</span>'
                    ),
                  }}
                />
                <p
                  className="!my-0"
                  dangerouslySetInnerHTML={{
                    __html: staff.content.replace(
                      /(2 contribution \(s\)) to (STF)/,
                      '<span style="border-bottom: 1px solid white;">$1</span> to <span class="underline">$2</span>'
                    ),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-[848px] w-full lg:space-x-8 xl:space-x-16 xl:hidden flex flex-col justify-center items-center text-center z-10 ">
          <h2 className="font-semibold text-white text-[64px] leading-[72px]">
            Thank you <br /> to our <span className="text-primary">300+</span>{" "}
            contributors
          </h2>
        </div>
        {/* ==========================================SET-2=============================================== */}
        <div className="flex w-fit xl:ml-[244px] justify-between mt-8  sm:space-x-[233px] space-x-10 md:mx-auto sm:ml-0 ">
          {set2.map((staff, contributionsCount) => (
            <div
              key={contributionsCount}
              className="flex items-center justify-center p-4 space-x-4 w-[305px] newscard"
              style={staff.style}
            >
              <img
                src={Staff}
                className="w-[72px] h-[72px] !mb-0"
                alt="scroll-divider"
              />
              <div className="text-white text-base font-normal leading-6">
                <p
                  className="!my-0"
                  dangerouslySetInnerHTML={{
                    __html: staff.thanksMessage.replace(
                      /sxa/,
                      '<span class="border-b border-white">sxa</span>'
                    ),
                  }}
                />
                <p
                  className="!my-0"
                  dangerouslySetInnerHTML={{
                    __html: staff.content.replace(
                      /(2 contribution \(s\)) to (STF)/,
                      '<span style="border-bottom: 1px solid white;">$1</span> to <span class="underline">$2</span>'
                    ),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ContributorsMobile

import React from "react";
import ProgressiveImage from "react-progressive-image-loading";
import { Pokemon } from "@/redux/slices/pokemonSlice";
import { PokemonTypeColors, PokemonTypeImages, PokemonTypePlaceholders } from "@/lib/globals";
import Trail from "./Trail";
import { lPad } from "@/lib/lPad";
import Image from "next/image";

const MaskStyling = {
  width: 130,
  height: 130,
  zIndex: -10,
  bottom: 8,
  left: 16,
};
const ImageContainerStyling = {
  width: 175,
  height: 175,
};

type Props = Pokemon;

const PokemonCard = ({ id, name, sprites, types }: Props) => {


  const backgroundColors = types.map(({ type }) => {
    const [[, backgroundColor]] = Object.entries(PokemonTypeColors).filter(
      ([key, _]) => key === type.name
    );

    return backgroundColor;
  });
  const imagePlaceholder = types.map(({ type }) => {
    const [[, image]] = Object.entries(PokemonTypePlaceholders).filter(
      ([key, _]) => key === type.name
    );
    return image;
  });


  const visualizePokemonDetails = () => {
    alert('Implementing...')
  }

  return (
    <Trail open={true}>
      <div
        className="w-full relative overflow-visible rounded-2xl shadow-lg mx-auto cursor-pointer hover:shadow-2xl transition-all duration-200 ease-in-out transform hover:-translate-y-2"
        style={{
          backgroundColor: backgroundColors[0].medium,
        }}
        onClick={visualizePokemonDetails}
      >

        <div
          className="py-32   w-full flex items-center   relative"
          style={{
            backgroundColor: backgroundColors[0].medium,
          }}
        >
          <p className="text-5xl font-moglan text-rich_black-500 text-opacity-25  tracking-xl  pointer-events-none">
            #{lPad(id, 3)}
          </p>
          <div className="w-full h-[450px] absolute  overflow-hidden" >

            <div
              className="absolute opacity-10 scale-150 left-0 bottom-0 saturate-25   ">
              <ProgressiveImage
                preview={PokemonTypeImages[types[0].type.name]}
                render={(src, style) => (
                  <Image height={200} width={200} src={src} alt={name} />
                )}
              />
            </div>
          </div>
          <div
            className="right-20 absolute"
            style={ImageContainerStyling}
          >

            <div
              className="rounded-full absolute z-30  "
              style={{
                ...MaskStyling,
                backgroundColor: backgroundColors[0].light,
              }}
            />
            <ProgressiveImage
              preview={imagePlaceholder[0]}
              src={sprites.frontDefault}
              render={(src, style) => (
                <Image className="scale-[1.5]" layout={'fill'} src={src} alt={name} />
              )}
            />
          </div>

        </div>

        <div className="relative bg-white w-full pt-2 text-right ">
          <h1 style={{ textShadow: 'rgb(39, 53, 88, .6) 8px 0' }} className="capitalize text-naples_yellow-400 font-pokemon-solid text-6xl mb-2 pr-10">{name}</h1>
          <div style={{ backgroundColor: backgroundColors[0].light }} className="flex flex-wrap mx-auto justify-end py-2 mt-5 pr-10 space-x-2">
            {types.map(({ type }, index) => {
              return (
                <h3
                  key={`${id}-${type.name}`}
                  className={
                    "font-poppins brightness-75 uppercase text-lg  drop-shadow-xl "
                  }
                  style={{ color: backgroundColors[index].medium }}
                >
                  {type.name}
                </h3>
              );
            })}
          </div>
        </div>
      </div>
    </Trail>
  );
};

export default PokemonCard;
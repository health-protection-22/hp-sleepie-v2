import React from 'react';
import type { GetServerSideProps } from 'next';
import { Box, Heading, Text, Link, List, ListIcon, ListItem } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import { Page } from '../components/Page';
import { PageTitle } from '../components/PageTitle';

const PrivacyPolicy = () => {
  const title = 'Privacy policy';
  const description = '';

  return (
    <Page title={title} description={description}>
      <PageTitle title={title} breadcrumbs={['Home', title]} />
      <div className="w-full flex flex-col items-center">
        <div className="max-w-[1440px] px-6 lg:px-[60px] w-full flex flex-col gap-10 items-center">
          <Box w="100%" mx="auto">
            <Heading size="md" mt={8} mb={2}>
              1. USER INFORMATION
            </Heading>
            <Heading as="h3" size="sm" mt={4}>
              Who is the controller of your personal data?
            </Heading>
            <Text mb={4} textAlign="justify">
              HEALTH PROTECTION EUROPE S.L. is the CONTROLLER of the USER’s personal data and
              informs him/her that these data shall be processed in accordance with the provisions
              of Regulation (EU) 2016/679 of 27 April (GDPR) and the Organic Law 3/2018 of 5
              December (LOPDGDD).
            </Text>
            <Heading as="h3" size="sm" mt={4}>
              Why do process your personal data?
            </Heading>
            <Text mb={4} textAlign="justify">
              To maintain a commercial relationship with the user. The planned processing operations
              are:
            </Text>
            <List>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">
                  Sending commercial advertising communications by email, fax, SMS, MMS, social
                  networks or by any other electronic or physical means, present or future, that
                  make it possible to carry out commercial communications.
                </Text>
              </ListItem>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">
                  These communications will be made by the CONTROLLER and will be related to their
                  products and services, or those of their partners or suppliers with whom they have
                  reached a promotion agreement. In this case, the third parties will never have
                  access to personal data.{' '}
                </Text>
              </ListItem>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">Conduct market research and statistical analysis.</Text>
              </ListItem>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">
                  Processing orders, requests, respond to queries or any type of request made by the
                  USER through any of the contact methods available at the CONTROLLER’s website.
                </Text>
              </ListItem>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">
                  Send the online newsletter on news, offers and promotions in our activity.
                </Text>
              </ListItem>
            </List>

            <Heading as="h3" size="sm" mt={4}>
              Why can we process your personal data?
            </Heading>
            <Text mb={4} textAlign="justify">
              Because the processing is legitimised by article 6 of the GDPR as follows:
            </Text>
            <List>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">
                  With the USER’s consent: sending commercial communications and the newsletter.
                </Text>
              </ListItem>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">
                  In the legitimate interest of the CONTROLLER: conduct market research, statistical
                  analysis, etc. and process orders, requests, etc. at the request of the USER.
                </Text>
              </ListItem>
            </List>
            <Heading as="h3" size="sm" mt={4}>
              For how long will we keep your personal data?
            </Heading>
            <Text mb={4} textAlign="justify">
              Data shall be stored for no longer than is necessary to maintain the purpose of the
              processing or for as long as there are legal prescriptions dictating their custody,
              and when such purpose is no longer necessary the data shall be erased with appropriate
              security measures to ensure the anonymization of the data or their complete
              destruction.
            </Text>
            <Heading as="h3" size="sm" mt={4}>
              To whom do we disclose your personal data?
            </Heading>
            <Text mb={4} textAlign="justify">
              No communication of personal data to third parties is foreseen except, if necessary
              for the development and execution of the purposes of the processing, to our suppliers
              of services related to communications, with which the CONTROLLER has signed the
              confidentiality and data processor contracts required by current privacy regulations.
            </Text>
            <Heading as="h3" size="sm" mt={4}>
              What are your rights?
            </Heading>
            <Text mb={4} textAlign="justify">
              The rights of the USER are:
            </Text>
            <List>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">Right to withdraw consent at any time.</Text>
              </ListItem>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">
                  Right of access, rectification, portability and erasure of your data and the
                  limitation or objection to their processing.
                </Text>
              </ListItem>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">
                  The right to file a claim with the Spanish Supervisory Authority (www.aepd.es) if
                  you consider that the processing does not comply with the current legislation.
                </Text>
              </ListItem>
            </List>
            <Heading as="h3" size="sm" mt={4}>
              Contact information for exercising rights:
            </Heading>
            <List>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">
                  HEALTH PROTECTION EUROPE S.L.. AVD CAN BELLET 43 (4 C), - 08174 SANT CUGAT DEL
                  VALLÈS (Barcelona).
                </Text>
              </ListItem>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">
                  E-mail:{' '}
                  <Link
                    color="primary.600"
                    textDecor="underline"
                    _hover={{ textDecor: 'none' }}
                    href="mailto:vidal@healthprotection.com"
                  >
                    vidal@healthprotection.com
                  </Link>
                </Text>
              </ListItem>
            </List>
            <Heading as="h3" size="sm" mt={4}>
              Contact details of the data protection officer:
            </Heading>
            <List>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">
                  Pque Científico y Tecnológico de Cantabria PCTCAN Edificio 3000 C/ Isabel Torres,
                  11 Of. 16, 39011 SANTANDER
                </Text>
              </ListItem>
              <ListItem display="flex">
                <ListIcon as={ChevronRightIcon} color="primary.600" fontSize="xl" h={8} />
                <Text textAlign="justify">
                  E-mail:{' '}
                  <Link
                    color="primary.600"
                    textDecor="underline"
                    _hover={{ textDecor: 'none' }}
                    href="mailto:gustavo@fsconsultores.es"
                  >
                    gustavo@fsconsultores.es
                  </Link>
                </Text>
              </ListItem>
            </List>

            <Heading size="md" mt={8} mb={2}>
              2. COMPULSORY OR OPTIONAL NATURE OF THE INFORMATION PROVIDED BY THE USER
            </Heading>
            <Text mb={4} textAlign="justify">
              You voluntarily and freely communicate to us during your participation in the trial on
              our website so that we can recommend the appropriate supplements, vitamins and
              nutraceuticals for your situation and needs. This collection is necessary to perform
              the contract entered into when you use our Services on our Site.
            </Text>
            <Text mb={4} textAlign="justify">
              The USERS, by marking the corresponding boxes and entering data in the fields, marked
              with an asterisk (*) in the contact form or download forms, accept expressly and in a
              free and unequivocal way that their data are necessary for the supplier to meet their
              request, voluntarily providing their data in the remaining fields. The USER ensures
              that the personal data provided to the CONTROLLER are true and is responsible for
              communicating any changes to them. The CONTROLLER informs that all data requested
              through the website are mandatory, as they are necessary for the provision of an
              optimal service to the USER. In the event that not all of the data is provided, there
              is no guarantee that the information and services provided will be completely adapted
              to the User’s needs.
            </Text>
            <Heading size="md" mt={8} mb={2}>
              3. SECURITY MEASURES
            </Heading>
            <Text mb={4} textAlign="justify">
              That in accordance with the provisions of the current regulations on the protection of
              personal data, the CONTROLLER is complying with all the provisions of the GDPR and
              LOPDGDD regulations for processing the personal data for which they are responsible,
              and is manifestly complying with the principles described in Article 5 of the GDPR, by
              which they are processed in a lawful, fair and transparent manner in relation to the
              data subject and appropriate, relevant and limited to what is necessary in relation to
              the purposes for which they are processed.
            </Text>
            <Text mb={4} textAlign="justify">
              The CONTROLLER guarantees that all appropriate technical and organisational policies
              have been implemented to apply the security measures established by the GDPR and
              LOPDGDD in order to protect the rights and freedoms of USERS and has communicated the
              appropriate information for them to be able to exercise them.
            </Text>
            <Text mb={4} textAlign="justify">
              For more information about privacy guarantees, you can contact the CONTROLLER through
              HEALTH PROTECTION EUROPE S.L.. AVD CAN BELLET 43 (4 C), – 08174 SANT CUGAT DEL VALLÈS
              (Barcelona). E-mail:{' '}
              <Link
                color="primary.600"
                textDecor="underline"
                _hover={{ textDecor: 'none' }}
                href="mailto:vidal@healthprotection.com"
              >
                vidal@healthprotection.com
              </Link>
            </Text>
            <Text mb={4} textAlign="justify">
              Contact details of the data protection officer: Pque Científico y Tecnológico de
              Cantabria PCTCAN Edificio 3000 C/ Isabel Torres, 11 Of. 16, 39011 SANTANDER –{' '}
              <Link
                color="primary.600"
                textDecor="underline"
                _hover={{ textDecor: 'none' }}
                href="mailto:gustavo@fsconsultores.es"
              >
                gustavo@fsconsultores.es
              </Link>
            </Text>
          </Box>
        </div>
      </div>
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};

export default PrivacyPolicy;

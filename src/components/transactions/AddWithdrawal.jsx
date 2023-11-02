import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Button,
} from "@chakra-ui/react";
import { Form, useNavigate } from "react-router-dom";
import BASE_URL from "../../utilities/apiUrl-Totals";
import axios from "axios";
import { toast } from "react-toastify";

const AddWithdrawal = () => {
  const [withdrawalData, setWithdrawalData] = useState({});
  const navigate = useNavigate();
  let getStaffId = localStorage.getItem("id");

  const handleWithdrawal = () => {
    axios
      .post(`${BASE_URL}/account/withdraw`, {
        ...withdrawalData,
        createdBy: getStaffId,
      })
      .then((resp) => {
        if (resp.data.msg === `Amount has been debited to the account`) {
          toast.success(resp.data.msg);
          navigate("/dashboard");
        } else {
          toast.error(resp.data.msg);
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Error occurred during transaction");
      });
  };

  return (
    <div className="addSection">
      <div className="transactionForm">
        <h1 className="title cen">Add Withdrawal</h1>
        <Form onSubmit={handleWithdrawal}>
          <div className="between">
            <FormControl className="flex between">
              <FormLabel>Transactor</FormLabel>
              <Input
                className="addInput"
                required
                type="text"
                name="name"
                id="name"
                onChange={(e) =>
                  setWithdrawalData({ ...withdrawalData, name: e.target.value })
                }
              />
            </FormControl>
            <FormControl className="flex between">
              <FormLabel>Contact</FormLabel>
              <Input
                className="addInput"
                required
                type="text"
                name="contact"
                id="contact"
                onChange={(e) =>
                  setWithdrawalData({
                    ...withdrawalData,
                    contact: e.target.value,
                  })
                }
              />
            </FormControl>
          </div>
          <FormControl className="flex between">
            <FormLabel>Branch</FormLabel>
            <Input
              className="addInput"
              required
              type="text"
              name="branch"
              id="branch"
              onChange={(e) =>
                setWithdrawalData({ ...withdrawalData, branch: e.target.value })
              }
            />
          </FormControl>
          <FormControl className="flex between">
            <FormLabel>Account Name</FormLabel>
            <Input
              className="addInput"
              required
              type="text"
              name="accountName"
              id="accountName"
              onChange={(e) =>
                setWithdrawalData({
                  ...withdrawalData,
                  accountName: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl className="flex between">
            <FormLabel className="labelRadio" as="legend">
              Account Type
            </FormLabel>

            <RadioGroup required>
              <HStack spacing="24px">
                <Radio
                  value="Savings"
                  name="accountType"
                  onChange={(e) =>
                    setWithdrawalData({
                      ...withdrawalData,
                      accountType: e.target.value,
                    })
                  }
                >
                  Savings
                </Radio>
                <Radio
                  value="Current"
                  name="accountType"
                  onChange={(e) =>
                    setWithdrawalData({
                      ...withdrawalData,
                      accountType: e.target.value,
                    })
                  }
                >
                  Current
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl className="flex between">
            <FormLabel>Account Number</FormLabel>
            <Input
              className="addInput"
              required
              type="text"
              name="accNumber"
              id="accNumber"
              onChange={(e) =>
                setWithdrawalData({
                  ...withdrawalData,
                  accNumber: e.target.value,
                })
              }
            />
          </FormControl>
          <FormControl className="flex between">
            <FormLabel className="labelRadio" as="legend">
              Payment Method
            </FormLabel>

            <RadioGroup required w="189px">
              <HStack spacing="24px">
                <Radio
                  value="Cash"
                  name="paymentType"
                  onChange={(e) =>
                    setWithdrawalData({
                      ...withdrawalData,
                      paymentType: e.target.value,
                    })
                  }
                >
                  Cash
                </Radio>
                <Radio
                  value="Check"
                  name="paymentType"
                  onChange={(e) =>
                    setWithdrawalData({
                      ...withdrawalData,
                      paymentType: e.target.value,
                    })
                  }
                >
                  Check
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl className="flex between">
            <FormLabel>Amount</FormLabel>
            <Input
              className="addInput"
              required
              type="text"
              name="amount"
              id="amount"
              onChange={(e) =>
                setWithdrawalData({ ...withdrawalData, amount: e.target.value })
              }
            />
          </FormControl>
          <FormControl className="flex between">
            <FormLabel className="labelRadio" as="legend">
              ID Type
            </FormLabel>

            <RadioGroup required>
              <HStack spacing="24px">
                <Radio
                  value="National ID"
                  name="idType"
                  onChange={(e) =>
                    setWithdrawalData({
                      ...withdrawalData,
                      idType: e.target.value,
                    })
                  }
                >
                  National ID
                </Radio>
                <Radio
                  value="Passport"
                  name="idType"
                  onChange={(e) =>
                    setWithdrawalData({
                      ...withdrawalData,
                      idType: e.target.value,
                    })
                  }
                >
                  Passport
                </Radio>
                <Radio
                  value="Driver's Licence"
                  name="idType"
                  onChange={(e) =>
                    setWithdrawalData({
                      ...withdrawalData,
                      idType: e.target.value,
                    })
                  }
                >
                  Driver's Licence
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl className="flex between">
            <FormLabel>ID Number</FormLabel>
            <Input
              className="addInput"
              required
              type="text"
              name="idNumber"
              id="idNumber"
              onChange={(e) =>
                setWithdrawalData({
                  ...withdrawalData,
                  idNumber: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl className="flex between">
            <FormLabel className="labelRadio" as="legend">
              ID Verified
            </FormLabel>

            <RadioGroup required w="189px">
              <HStack spacing="24px">
                <Radio
                  value="Yes"
                  name="idVerified"
                  onChange={(e) =>
                    setWithdrawalData({
                      ...withdrawalData,
                      idVerified: e.target.value,
                    })
                  }
                >
                  Yes
                </Radio>
                <Radio
                  value="No"
                  name="idVerified"
                  onChange={(e) =>
                    setWithdrawalData({
                      ...withdrawalData,
                      idVerified: e.target.value,
                    })
                  }
                >
                  No
                </Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <div className="flex">
            <Button
              bg="navy"
              color="white"
              m="5"
              type="submit"
              _hover={{ backgroundColor: "tomato" }}
            >
              Add Entry
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddWithdrawal;

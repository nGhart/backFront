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

const AddDeposit = () => {
  const [depositData, setDepositData] = useState({});
  const navigate = useNavigate();
  let getStaffId = localStorage.getItem("id");

  const handleDeposit = () => {
    axios
      .post(`${BASE_URL}/account/deposit`, {
        ...depositData,
        createdBy: getStaffId,
      })
      .then((resp) => {
        if (resp.data.msg === `Amount has been credited to the account`) {
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
        <h1 className="title cen">Add Deposit</h1>
        <Form onSubmit={handleDeposit}>
          <div className="flex">
            <FormControl className="flex between">
              <FormLabel>Depositor</FormLabel>
              <Input
                className="addInput"
                required
                type="text"
                name="name"
                id="name"
                onChange={(e) =>
                  setDepositData({ ...depositData, name: e.target.value })
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
                  setDepositData({ ...depositData, contact: e.target.value })
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
                setDepositData({ ...depositData, branch: e.target.value })
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
                setDepositData({
                  ...depositData,
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
                    setDepositData({
                      ...depositData,
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
                    setDepositData({
                      ...depositData,
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
                setDepositData({ ...depositData, accNumber: e.target.value })
              }
            />
          </FormControl>

          <FormControl className="flex between">
            <FormLabel className="labelRadio" as="legend">
              Payment Method
            </FormLabel>

            <RadioGroup w="189px" required>
              <HStack spacing="24px">
                <Radio
                  value="Cash"
                  name="paymentType"
                  onChange={(e) =>
                    setDepositData({
                      ...depositData,
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
                    setDepositData({
                      ...depositData,
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
                setDepositData({ ...depositData, amount: e.target.value })
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
                    setDepositData({
                      ...depositData,
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
                    setDepositData({
                      ...depositData,
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
                    setDepositData({
                      ...depositData,
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
                setDepositData({ ...depositData, idNumber: e.target.value })
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
                    setDepositData({
                      ...depositData,
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
                    setDepositData({
                      ...depositData,
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
              type="submit"
              m="5"
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

export default AddDeposit;

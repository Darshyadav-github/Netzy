import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, User, CreditCard, Rocket, Calendar } from 'lucide-react';

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    
    // Trip Selection
    destination: '',
    flightNumber: '',
    departureDate: '',
    passengers: 1,
    accommodationType: '',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: '',
    
    // Additional Services
    insurance: false,
    training: false,
    meals: '',
    specialRequests: ''
  });

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Trip Selection', icon: Rocket },
    { number: 3, title: 'Payment', icon: CreditCard },
    { number: 4, title: 'Review', icon: Check }
  ];

  const destinations = [
    { id: 'luna', name: 'Luna Prime Station', price: 485000 },
    { id: 'mars', name: 'Mars Colony Olympus', price: 2750000 },
    { id: 'europa', name: 'Europa Deep Station', price: 5800000 },
    { id: 'titan', name: 'Titan Sky City', price: 7200000 },
    { id: 'ceres', name: 'Ceres Mining Base', price: 1850000 },
    { id: 'ganymede', name: 'Ganymede Gateway', price: 4200000 }
  ];

  const flights = [
    { id: 'CV-2024-001', destination: 'luna', date: '2024-03-15', available: 8 },
    { id: 'CV-2024-002', destination: 'mars', date: '2024-04-22', available: 3 },
    { id: 'CV-2024-003', destination: 'europa', date: '2024-05-10', available: 2 },
    { id: 'CV-2024-004', destination: 'ceres', date: '2024-06-18', available: 12 },
    { id: 'CV-2024-005', destination: 'titan', date: '2024-07-25', available: 6 },
    { id: 'CV-2024-006', destination: 'ganymede', date: '2024-08-12', available: 9 }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const getSelectedDestination = () => {
    return destinations.find(dest => dest.id === formData.destination);
  };

  const getSelectedFlight = () => {
    return flights.find(flight => flight.id === formData.flightNumber);
  };

  const calculateTotal = () => {
    const selectedDest = getSelectedDestination();
    if (!selectedDest) return 0;
    
    let total = selectedDest.price * formData.passengers;
    if (formData.insurance) total += 50000;
    if (formData.training) total += 25000;
    if (formData.accommodationType === 'premium') total += 100000;
    
    return total;
  };

  const renderPersonalInfo = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            placeholder="Enter your last name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Date of Birth</label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Nationality</label>
          <input
            type="text"
            value={formData.nationality}
            onChange={(e) => handleInputChange('nationality', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            placeholder="e.g., United States"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Passport Number</label>
          <input
            type="text"
            value={formData.passportNumber}
            onChange={(e) => handleInputChange('passportNumber', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            placeholder="Passport number"
          />
        </div>
      </div>
    </motion.div>
  );

  const renderTripSelection = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold mb-6">Trip Selection</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Destination</label>
        <select
          value={formData.destination}
          onChange={(e) => handleInputChange('destination', e.target.value)}
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
        >
          <option value="">Select destination</option>
          {destinations.map(dest => (
            <option key={dest.id} value={dest.id}>
              {dest.name} - ${dest.price.toLocaleString()}
            </option>
          ))}
        </select>
      </div>

      {formData.destination && (
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Available Flights</label>
          <select
            value={formData.flightNumber}
            onChange={(e) => handleInputChange('flightNumber', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
          >
            <option value="">Select flight</option>
            {flights
              .filter(flight => flight.destination === formData.destination)
              .map(flight => (
                <option key={flight.id} value={flight.id}>
                  {flight.id} - {flight.date} ({flight.available} seats available)
                </option>
              ))}
          </select>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Number of Passengers</label>
          <select
            value={formData.passengers}
            onChange={(e) => handleInputChange('passengers', parseInt(e.target.value))}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} passenger{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Accommodation Type</label>
          <select
            value={formData.accommodationType}
            onChange={(e) => handleInputChange('accommodationType', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
          >
            <option value="standard">Standard Cabin</option>
            <option value="premium">Premium Suite (+$100,000)</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-cyan-400">Additional Services</h4>
        <div className="space-y-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.insurance}
              onChange={(e) => handleInputChange('insurance', e.target.checked)}
              className="mr-3 w-4 h-4 text-cyan-400 bg-slate-700 border-slate-600 rounded focus:ring-cyan-400"
            />
            <span>Space Travel Insurance (+$50,000)</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.training}
              onChange={(e) => handleInputChange('training', e.target.checked)}
              className="mr-3 w-4 h-4 text-cyan-400 bg-slate-700 border-slate-600 rounded focus:ring-cyan-400"
            />
            <span>Advanced Training Program (+$25,000)</span>
          </label>
        </div>
      </div>
    </motion.div>
  );

  const renderPayment = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold mb-6">Payment Information</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Card Holder Name</label>
        <input
          type="text"
          value={formData.cardholderName}
          onChange={(e) => handleInputChange('cardholderName', e.target.value)}
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
          placeholder="Full name as on card"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
        <input
          type="text"
          value={formData.cardNumber}
          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
          placeholder="1234 5678 9012 3456"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Expiry Date</label>
          <input
            type="text"
            value={formData.expiryDate}
            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">CVV</label>
          <input
            type="text"
            value={formData.cvv}
            onChange={(e) => handleInputChange('cvv', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
            placeholder="123"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Billing Address</label>
        <textarea
          value={formData.billingAddress}
          onChange={(e) => handleInputChange('billingAddress', e.target.value)}
          className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-cyan-400 focus:outline-none"
          rows="3"
          placeholder="Full billing address"
        />
      </div>

      <div className="bg-slate-700/50 rounded-lg p-4">
        <h4 className="font-semibold mb-3 text-cyan-400">Payment Summary</h4>
        <div className="space-y-2 text-sm">
          {getSelectedDestination() && (
            <div className="flex justify-between">
              <span>Base Price ({formData.passengers} passenger{formData.passengers > 1 ? 's' : ''})</span>
              <span>${(getSelectedDestination().price * formData.passengers).toLocaleString()}</span>
            </div>
          )}
          {formData.accommodationType === 'premium' && (
            <div className="flex justify-between">
              <span>Premium Suite</span>
              <span>+$100,000</span>
            </div>
          )}
          {formData.insurance && (
            <div className="flex justify-between">
              <span>Space Travel Insurance</span>
              <span>+$50,000</span>
            </div>
          )}
          {formData.training && (
            <div className="flex justify-between">
              <span>Advanced Training</span>
              <span>+$25,000</span>
            </div>
          )}
          <div className="border-t border-slate-600 pt-2 mt-2">
            <div className="flex justify-between font-bold text-lg text-cyan-400">
              <span>Total</span>
              <span>${calculateTotal().toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderReview = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h3 className="text-2xl font-bold mb-6">Review Your Booking</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-cyan-400">Personal Information</h4>
            <div className="space-y-2 text-sm">
              <div><span className="text-gray-400">Name:</span> {formData.firstName} {formData.lastName}</div>
              <div><span className="text-gray-400">Email:</span> {formData.email}</div>
              <div><span className="text-gray-400">Phone:</span> {formData.phone}</div>
              <div><span className="text-gray-400">Nationality:</span> {formData.nationality}</div>
            </div>
          </div>

          <div className="bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-cyan-400">Trip Details</h4>
            <div className="space-y-2 text-sm">
              {getSelectedDestination() && (
                <div><span className="text-gray-400">Destination:</span> {getSelectedDestination().name}</div>
              )}
              {getSelectedFlight() && (
                <>
                  <div><span className="text-gray-400">Flight:</span> {getSelectedFlight().id}</div>
                  <div><span className="text-gray-400">Departure:</span> {getSelectedFlight().date}</div>
                </>
              )}
              <div><span className="text-gray-400">Passengers:</span> {formData.passengers}</div>
              <div><span className="text-gray-400">Accommodation:</span> {formData.accommodationType === 'premium' ? 'Premium Suite' : 'Standard Cabin'}</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h4 className="font-semibold mb-3 text-cyan-400">Additional Services</h4>
            <div className="space-y-2 text-sm">
              <div><span className="text-gray-400">Insurance:</span> {formData.insurance ? 'Yes' : 'No'}</div>
              <div><span className="text-gray-400">Training:</span> {formData.training ? 'Yes' : 'No'}</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg p-4 border border-cyan-400/30">
            <h4 className="font-semibold mb-3 text-cyan-400">Final Total</h4>
            <div className="text-3xl font-bold text-white">
              ${calculateTotal().toLocaleString()}
            </div>
            <p className="text-sm text-gray-400 mt-2">
              This amount will be charged to your card ending in {formData.cardNumber.slice(-4)}
            </p>
          </div>

          <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
            <h4 className="font-semibold mb-2 text-yellow-400">Important Notes</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Medical clearance required before flight</li>
              <li>• Full payment due 30 days before departure</li>
              <li>• Cancellation policy applies</li>
              <li>• Training begins 60 days before launch</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
        >
          Confirm Booking & Pay
        </motion.button>
        <p className="text-sm text-gray-400 mt-3">
          By confirming, you agree to our terms and conditions
        </p>
      </div>
    </motion.div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1: return renderPersonalInfo();
      case 2: return renderTripSelection();
      case 3: return renderPayment();
      case 4: return renderReview();
      default: return renderPersonalInfo();
    }
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Book Your Journey
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Complete your space travel booking in just a few simple steps
            </p>
          </motion.div>

          <div className="mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    currentStep >= step.number
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent text-white'
                      : 'border-slate-600 text-gray-400'
                  }`}>
                    {currentStep > step.number ? (
                      <Check className="h-6 w-6" />
                    ) : (
                      <step.icon className="h-6 w-6" />
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-4 rounded transition-all duration-300 ${
                      currentStep > step.number
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600'
                        : 'bg-slate-600'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-cyan-400' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl">
            {renderStepContent()}

            <div className="flex justify-between mt-8 pt-6 border-t border-slate-700">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  currentStep === 1
                    ? 'bg-slate-700 text-gray-500 cursor-not-allowed'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;